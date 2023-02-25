// connect sanity client with react

import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client  = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn:true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    apiVersion:'2023-02-24'
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);