import React from 'react';
import { Link } from 'gatsby';

import style from '../styles/mobile.module.css';
import menu from '../assets/menu.svg';

export default function MobileNav() {
  function handleClick() {
    document.querySelector(`.${style.nav}`).classList.toggle(`${style.show}`);
  }

  return (
    <header className={style.header}>
      <Link to="/"><h1>Shafi</h1></Link>
      <button type="button" aria-label="toggle navigation" onClick={handleClick}><img src={menu} alt="" /></button>
      <nav className={style.nav}>
        <Link to="/" activeClassName={style.current}>Home</Link>
        <Link to="/blog" activeClassName={style.current}>Blog</Link>
        <Link to="/works" activeClassName={style.current}>Works</Link>
        <Link to="/contact" activeClassName={style.current}>Contact</Link>
        <Link to="/about" activeClassName={style.current}>About</Link>
      </nav>
    </header>
  );
}
