import React from 'react';
import {Link} from 'react-router-dom';
import "./Resume.css";

function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <p>Here, you can present your resume.</p>
      <Link to="/">
          <button>Go back home</button>
      </Link>
    </div>
  );
}

export default Resume;
