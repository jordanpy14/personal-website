import React from 'react';
import {Link} from 'react-router-dom';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='about-me-page'>
      <h1>About Me</h1>
      <p>This is where you would write about yourself. My name is Jordan Paredes and I go to Stanford University </p>
      <Link to="/">
          <button>Go back Home</button> 
      </Link>
    </div>
  );
}

export default AboutMe;
