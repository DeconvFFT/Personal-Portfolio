import React from 'react';

import {About, Footer, Header,Skills, Testimonial, Work, Publication} from './container';
import { Navbar } from './components';

import './App.scss';
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Publication/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;