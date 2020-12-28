import React from 'react';

import Sidebar from './sidebar';
import MobileNav from './mobile';

import style from '../styles/global.module.css';

export default function Layout({ children }) {
  return (
    <div className={style.base}>
      <Sidebar />
      <MobileNav />
      <div className={style.container}>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
}
