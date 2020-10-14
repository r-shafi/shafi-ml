import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </Router>
    </nav>
  );
}

export default Nav;
