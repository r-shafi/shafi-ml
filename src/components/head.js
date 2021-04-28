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

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="../assets/bg.png" />
      <meta property="og:url" content="https://www.shafi.ml" />

      <meta property="article:publisher" content="https://www.shafi.ml" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="../assets/bg.png" />
      <meta property="twitter:site" content="@shafiemoji" />
    </Helmet>
  );
}
