import React from 'react';
import { Helmet } from 'react-helmet';
import Base from '../components/base';

export default function FourOFour() {
  return (
    <Base>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found | Shafi Rayhan</title>
        <meta name="description" content="Hello! I am Shafi Rayhan, a front-end web developer based in Sylhet, Bangladesh. I love working with JavaScript, React, GatsbyJS and other web technologies." />
      </Helmet>
      <h1>404</h1>
    </Base>
  );
}
