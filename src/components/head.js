import React from 'react';
import { Helmet } from 'react-helmet';

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
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.shafi.ml/" />
      <meta property="og:image" content="https://i.imgur.com/Sk32f3O.png" />
      <meta property="og:description" content={description || defaultDescription} />

      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:image" content="https://i.imgur.com/Sk32f3O.png"></meta>
      <meta name="twitter:creator" content="@shafiemoji"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description || defaultDescription}></meta>
    </Helmet>
  );
}
