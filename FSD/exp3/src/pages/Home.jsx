import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Registration from '../components/Registration';
import Venue from '../components/Venue';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Registration />
      <Venue />
    </>
  );
}

export default Home;
