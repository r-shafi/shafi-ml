import React from 'react';

import Sidebar from './sidebar';
import MobileNav from './mobilenav';

import style from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={style.base}>
      <Sidebar />
      <MobileNav />
      <div className={style.contentContainer}>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
}
