import React from 'react';

import Home from './Home';
import About from './About';
import Profile from './Profile';
import Footer from './Footer';
import Portefillo from './Portefillo';
import Contact from './Contact';
import Social from './Social';
import Work from './Work';

export default function Collect() {
  return (
    <div>
      <Home />
      <Work />
      <Portefillo />
      <Profile />
      <About />
      <Social />
      <Footer />
    </div>
  );
}
