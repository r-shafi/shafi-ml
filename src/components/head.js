import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../static/favicon.png'

const defaultDescription = 'I am Shafi Rayhan, an experienced Front-End Web Developer from Sylhet, Bangladesh.';
const defaultKW = 'Front-End, Web Developer, Sylhet, React, GatsbyJS';

export default function Head({ title, description, keywords }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords || defaultKW} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="author" content="Shafi Rayhan" />
      <title>
        {title}
        {' '}
        | Shafi Rayhan
      </title>

      <link rel="shortcut icon" href={favicon} type="image/png"/>
      
      <meta property="og:url" content="https://www.shafi.ml/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Shafi Rayhan" />
      <meta property="og:description" content="I am Shafi Rayhan, an experienced Front-End Web Developer from Sylhet, Bangladesh." />
      <meta property="og:image" content="https://i.imgur.com/pJIMjxg.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shafiemoji" />
      <meta name="twitter:creator" content="@shafiemoji" />
      <meta name="twitter:title" content="Shafi Rayhan" />
      <meta name="twitter:description" content="I am Shafi Rayhan, an experienced Front-End Web Developer from Sylhet, Bangladesh." />
      <meta name="twitter:image" content="https://i.imgur.com/pJIMjxg.png" />
    </Helmet>
  );
}
