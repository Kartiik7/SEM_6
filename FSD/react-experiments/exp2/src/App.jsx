import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Venue from './components/Venue';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Speakers />
        <Registration />
        <Venue />
      </main>
      <Footer />
    </>
  );
}

export default App;
