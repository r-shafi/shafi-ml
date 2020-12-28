import React from 'react';
import { Link } from 'gatsby';

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
        <Link to="/about" activeClassName={style.current}>About</Link>
        <Link to="/contact" activeClassName={style.current}>Contact</Link>
        <Link to="/works" activeClassName={style.current}>Works</Link>
        <Link to="/blog" activeClassName={style.current}>Blog</Link>
      </nav>

      <footer>
        <p>Created By Shafi</p>
        <p>
          &copy;
          {' '}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
