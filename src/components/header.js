import React from 'react';
import { Link } from 'gatsby';
import Media from 'react-media';

import headerCSS from '../style/header.module.css';

import menu from '../media/menu.svg';

function toggleMenu() {
  document.querySelector('#mobileNav').classList.toggle(`${headerCSS.sidebarOpen}`);
}

function toggleMenuKeyboard(e) {
  if (e.code === 'Enter') {
    document.querySelector('#mobileNav').classList.toggle(`${headerCSS.sidebarOpen}`);
  }
}

function handleClose(e) {
  if (e.code === 'Escape') {
    document.querySelector('#mobileNav').classList.remove(`${headerCSS.sidebarOpen}`);
  }
}

function FullNavigation() {
  return (
    <nav className={headerCSS.fullNavigation}>
      <Link to="/" activeClassName={headerCSS.activePage}>
        Home
      </Link>
      <Link to="/blog" activeClassName={headerCSS.activePage}>Blog</Link>
      <Link to="/works" activeClassName={headerCSS.activePage}>
        Works
      </Link>
      <Link to="/contact" activeClassName={headerCSS.activePage}>
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
        name="menuButton"
        className={headerCSS.burger}
        onClick={toggleMenu}
        onKeyDown={toggleMenuKeyboard}
        tabIndex="0"
      />
      <nav className={headerCSS.sidebar} onKeyDown={handleClose} id="mobileNav">
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
        {(matches) => (
          <>
            {matches.desktop && <FullNavigation />}
            {matches.mobile && <MobileNavigation />}
          </>
        )}
      </Media>
    </header>
  );
}
