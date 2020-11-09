import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Shafi</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
