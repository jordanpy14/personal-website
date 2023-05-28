import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import AboutMe from './AboutMe';

function HomePage() {
  return (
    <div className="App">
      <div className='video-container'>
        <video className='background-video' autoPlay loop muted>
            <source src="videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className='welcome-message'>
          <div className='welcome'> Welcome</div>
          <div className='welcome-subtext'> My name is Jordan and this is my website </div>
        </div>
      </div>

      <div className="who-am_i">
        <Link to='/about-me'>Who am I?</Link>
      </div>

      <div className='content'>
        <div className='link-container'>
          <a href="https://www.linkedin.com/in/jordan-paredes-0a3ab21a6/" target="_blanck" rel="noopener noreferrer">
            <img src="LinkedIn.png" alt="LinkedIn" className='link-image'/>
          </a>

          <a href="https://github.com/jordanpy14" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" className='link-image'/>
          </a>

          <Link to="/projects">
            <img src="Gears.png" alt="Projects" className='link-image'/>
          </Link>

          <Link to="/resume">
            <img src='resume.png' alt='Resume' className='link-image'/>
          </Link>

        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
