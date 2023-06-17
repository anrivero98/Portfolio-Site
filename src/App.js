import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Hamburger from 'hamburger-react'

const App = () => {

  return (
    
    <div >
      <Navbar />
      {/* Remaining app content */}
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;

