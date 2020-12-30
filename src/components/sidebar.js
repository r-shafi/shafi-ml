import React from 'react';
import { Link } from 'gatsby';

import Footer from './footer';

import style from '../styles/sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={style.sidebar}>

      <header>
        <h1>Shafi Rayhan</h1>
        <p>Front End Web Developer</p>
      </header>

      <nav className={style.navigation}>
        <Link to="/" activeClassName={style.current}>Home</Link>
        <Link to="/blog" activeClassName={style.current}>Blog</Link>
        <Link to="/works" activeClassName={style.current}>Works</Link>
        <Link to="/contact" activeClassName={style.current}>Contact</Link>
        <Link to="/about" activeClassName={style.current}>About</Link>
      </nav>

      <Footer />
    </div>
  );
}
