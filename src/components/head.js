import React from 'react';
import { Helmet } from 'react-helmet';

const defaultDescription = 'I am Shafi Rayhan, an experienced Front-End Web Developer from Sylhet, Bangladesh.';
const defaultKW = 'Front-End, Web Developer, Sylhet, React, GatsbyJS';

import favicon from '../assets/favicon.png'

export default function Head({
  title, description, keywords, slug
}) {
  return (
    <Helmet>
      <meta name="google-site-verification" content="G06X29JfK8MH1UIKdHv9dT2JeWW9S9SgyKgLDiccrKM" />
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
      <meta property="og:description" content={description || defaultDescription} />
      <meta name="image" content="https://www.shafi.ml/static/bg.png" />

      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.shafi.ml/static/bg.png" />
      <meta property="og:url" content={slug ? `https://www.shafi.ml${slug}` : 'https://www.shafi.ml'} />
      <meta property="og:site_name" content="Shafi Rayhan" />

      <meta property="article:publisher" content="https://www.shafi.ml" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content="https://www.shafi.ml/static/bg.png" />
      <meta property="twitter:site" content="@shafiemoji" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href={favicon} type="image/png" />
    </Helmet>
  );
}
