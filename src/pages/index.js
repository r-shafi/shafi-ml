import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import style from '../styles/index.module.css';

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h1>Hi, I am Shafi Rayhan!</h1>
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
          <strong> NodeJS, GraphQL, SCSS </strong>
          and many more web technologies.
        </p>
        <p>Contact me if you want me to create a website for you.</p>
        <a href="mailto:shafirayhan@hotmail.com" className={style.button}>
          CONTACT ME
        </a>
      </div>
    </Layout>
  );
}
