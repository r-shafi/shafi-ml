import React from 'react';
import { Link } from 'gatsby';
import Media from 'react-media';

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

function FullNavigation() {
  return (
    <nav className="full-navigation">
      <Link to="/" activeClassName="active-page">
        Home
      </Link>
      <Link to="/blog" activeClassName="active-page">Blog</Link>
      <Link to="/works" activeClassName="active-page">
        Works
      </Link>
      <Link to="/contact" activeClassName="active-page">
        Contact
      </Link>
    </nav>
  );
}

function MobileNavigation() {
  return (
    <>
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
        <Link to="/blog">Blog</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleMenu} type="button" name="close sidebar">x</button>
      </nav>
    </>
  );
}

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Shafi</Link>
      </h1>
      <Media queries={{
        desktop: '(min-width: 751px)',
        mobile: '(max-width: 750px)',
      }}
      >
        {(matches) => 
          <>
            {matches.desktop && <FullNavigation />}
            {matches.mobile && <MobileNavigation />}
          </>
        }
      </Media>
    </header>
  );
}
