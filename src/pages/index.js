import React from 'react';
import Base from '../components/base';

import '../styles/home.css';

export default function Home() {
  return (
    <Base>
      <div className="home">
        <h1>Hi, I am Shafi Rayhan!</h1>
        <h3>I love JavaScript.</h3>
        <p>
          I'm a Front-End Web Developer working from{' '}
          <strong>103.142.81.155</strong>.
        </p>
        <p>
          I have been creating websites since 2017 and have mastered{' '}
          <strong>HTML, CSS, JavaScript, React &amp; GatsbyJS</strong>.
        </p>
        <p>
          Nowadays I'm spending my time trying to learn{' '}
          <strong>NodeJS, GraphiQL, SCSS</strong> and many more web
          technologies.
        </p>
        <p>Contact me if you want me to create a website for you.</p>
        <a href="mailto:rayhanshafi7@gmail.com" className="button">
          CONTACT ME
        </a>
      </div>
    </Base>
  );
}
