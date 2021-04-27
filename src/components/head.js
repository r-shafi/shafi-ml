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
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:creator" content="@shafiemoji"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description || defaultDescription}></meta>
    </Helmet>
  );
}
