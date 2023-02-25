import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a  href='https://twitter.com/fitcoderworks'>
      <BsTwitter/>
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/saumya.mehta.908/'>
      <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/fitcoder_1/'>
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;