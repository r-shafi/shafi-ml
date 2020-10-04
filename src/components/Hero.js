import React from 'react';
import construction from '../media/1.svg';

function Hero() {
  return (
    <div className="hero">
      <h1>Hi, I'm Shafi Rayhan!</h1>
      <p>A front-end web developer from Sylhet.</p>
      <p>
        I know{' '}
        <abbr title="HTML is the standard markup language for Web pages.">
          HTML
        </abbr>
        ,{' '}
        <abbr title="CSS describes how HTML elements are to be displayed on screen, paper, or in other media.">
          CSS
        </abbr>{' '}
        &amp;{' '}
        <abbr title="JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. ">
          JavaScript
        </abbr>
        .
      </p>
      <p>
        Currently I'm learning{' '}
        <abbr title="React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.">
          ReactJS
        </abbr>
        .
      </p>
      <blockquote>FUNFACT: This site is built with React!</blockquote>
      <p className="warning">
        This site is going through a lot of changes everyday!
      </p>
      <img src={construction} alt="under construction" />
    </div>
  );
}

export default Hero;
