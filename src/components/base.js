import React from 'react';

import Header from './header';
import Footer from './footer';

import style from '../style/global.module.css';

export default function Base({ children }) {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>{children}</div>
      <Footer />
    </div>
  );
}
