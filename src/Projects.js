import React from 'react';
import {Link} from 'react-router-dom';
import "./Projects.css";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>Here, you can describe your projects.</p>
      <Link to="/">
          <button>Go back Home</button> 
      </Link>
    </div>
  );
}

export default Projects;