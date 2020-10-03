import React from 'react';
import ReactDOM from 'react-dom';
import './css/shafi.css';

import Header from './components/Header.js';
import Clock from './components/Clock.js';

ReactDOM.render(
  <div className="container">
    <Header />
    <Clock />
  </div>,
  document.getElementById('root')
);
