import React from 'react';
import { Link } from 'gatsby';

import menu from '../media/menu.svg';

function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('sidebar-open');
}

function toggleMenuKeyboard(e) {
  if (e.code === 'Enter') {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
  }
}

function handleClose(e) {
  if (e.code === 'Escape') {
    document.querySelector('.sidebar').classList.remove('sidebar-open');
  }
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
      <img
        src={menu}
        alt="toggle menu"
        className="burger"
        onClick={toggleMenu}
        onKeyDown={toggleMenuKeyboard}
        tabIndex="0"
      />
      <nav className="sidebar" onKeyDown={handleClose}>
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleMenu}>x</button>
      </nav>
    </header>
  );
}
