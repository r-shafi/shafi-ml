import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title}
        {' '}
        | Shafi Rayhan
      </title>
      <meta name="description" content="Shafi Rayhan, Front End Web Developer and Designer from Sylhet, Bangladesh. The best website developer in Sylhet!" />
    </Helmet>
  );
}
