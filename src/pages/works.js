import React from 'react';
import { Helmet } from 'react-helmet';
import Base from '../components/base';

import '../style/works.css';

const links = [
  {
    title: 'Calculator',
    link: 'https://modest-villani-d0e72a.netlify.app/calculator/index.html',
  },
  {
    title: 'Clock',
    link: 'https://modest-villani-d0e72a.netlify.app/clock/index.html',
  },
  {
    title: 'Form Validation',
    link:
      'https://modest-villani-d0e72a.netlify.app/form-validation/index.html',
  },
  {
    title: 'Guitar',
    link: 'https://modest-villani-d0e72a.netlify.app/guitar/index.html',
  },
  {
    title: 'Memory Card Game',
    link:
      'https://modest-villani-d0e72a.netlify.app/memory-card-game/index.html',
  },
  {
    title: 'Notes',
    link: 'https://modest-villani-d0e72a.netlify.app/notes/index.html',
  },
  {
    title: 'Photo Gallery',
    link: 'https://modest-villani-d0e72a.netlify.app/photo-gallery/index.html',
  },
  {
    title: 'Popup',
    link: 'https://modest-villani-d0e72a.netlify.app/popup/index.html',
  },
  {
    title: 'Progress Bar',
    link: 'https://modest-villani-d0e72a.netlify.app/progress-bar/index.html',
  },
  {
    title: 'Quiz',
    link: 'https://modest-villani-d0e72a.netlify.app/quiz/index.html',
  },
  {
    title: 'Todo List',
    link: 'https://modest-villani-d0e72a.netlify.app/todo-list/index.html',
  },
];

export default function Works() {
  return (
    <Base>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Works | Shafi Rayhan</title>
        <meta name="description" content="Hello! I am Shafi Rayhan, a front-end web developer based in Sylhet, Bangladesh. I love working with JavaScript, React, GatsbyJS and other web technologies. These are the projects that I've been working on." />
      </Helmet>
      <div className="works">
        {links.map((obj, i) => (
          <a href={obj.link} key={i} target="_blank" rel="noreferrer">
            {obj.title}
          </a>
        ))}
      </div>
    </Base>
  );
}
