import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './css/shafi.css';

render(
  <div className="container">
    <Header />
    <Hero />
  </div>,
  document.querySelector('#root')
);
