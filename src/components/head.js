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
      
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.shafi.ml/" />
      <meta property="og:image" content="https://i.imgur.com/Sk32f3O.png" />
      <meta property="og:description" content={description || defaultDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nytimes" />
      <meta name="twitter:creator" content="@SarahMaslinNir" />
      <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral" />
      <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here." />
      <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg" />
    </Helmet>
  );
}
