import React from 'react';
import { Helmet } from 'react-helmet';

import Base from '../components/base';

export default function Home() {
  return (
    <Base>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Shafi Rayhan</title>
        <meta name="description" content="Hello! I am Shafi Rayhan, a front-end web developer based in Sylhet, Bangladesh. I love working with JavaScript, React, GatsbyJS and other web technologies." />
      </Helmet>
      <div className="home">
        <h1>Hi, I am Shafi Rayhan!</h1>
        <em>I love JavaScript.</em>
        <p>
          I&apos;m a Front-End Web Developer based in Sylhet.
        </p>
        <p>
          I have been creating websites since 2017 and have mastered
          {' '}
          <strong>HTML, CSS, JavaScript, React &amp; GatsbyJS</strong>
          .
        </p>
        <p>
          Nowadays I&apos;m spending my time trying to learn
          {' '}
          <strong>NodeJS, GraphQL, SCSS </strong>
          and many more web technologies.
        </p>
        <p>Contact me if you want me to create a website for you.</p>
        <a href="mailto:shafirayhan@hotmail.com" className="button">
          CONTACT ME
        </a>
      </div>
    </Base>
  );
}
