import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonalInfo from './PersonalInfo';
import Story from './Story';
import Resume from './Resume';
import Projects from './Projects';
// import './MarioAnimation.css';

function App() {
  return (
    <div className="App">
      {/* <div className='mario'></div> */}
      <video className='background-video' autoPlay loop muted>
          <source src="videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <PersonalInfo />
      <Story />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
