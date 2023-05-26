import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonalInfo from './PersonalInfo';
import Story from './Story';
import Resume from './Resume';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
      <Story />
      <Resum />
      <Projects />
    </div>
  );
}

export default App;
