import React from 'react';

import Header from './header';
import Footer from './footer';

import '../style/global.css';

export default function Base({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
