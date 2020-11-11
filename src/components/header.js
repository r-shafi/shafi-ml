import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import menu from '../media/menu.svg';

function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('sidebar-open');
}

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Shafi</Link>
      </h1>
      <nav className="full-navigation">
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <img src={menu} alt="" className="burger" onClick={toggleMenu} />
      <nav className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleMenu}>x</button>
      </nav>
    </header>
  );
}
