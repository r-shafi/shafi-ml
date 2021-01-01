import React from 'react';

import github from '../assets/github.svg';
import ig from '../assets/ig.svg';
import messenger from '../assets/messenger.svg';
import twitter from '../assets/twitter.svg';
import whatsapp from '../assets/whatsapp.svg';
import facebook from '../assets/facebook.svg';

import style from '../styles/footer.module.css';

const links = [

  {
    image: github,
    link: 'https://github.com/r-shafi',
  },
  {
    image: twitter,
    link: 'https://twitter.com/shafiemoji',
  },
  {
    image: facebook,
    link: 'https://www.facebook.com/shafiemoji',
  },
  {
    image: ig,
    link: 'https://www.instagram.com/shafiemoji',
  },
  {
    image: whatsapp,
    link: 'https://api.whatsapp.com/send?phone=8801704792392',
  },
  {
    image: messenger,
    link: 'https://m.me/shafiemoji',
  },
];

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <p>Created By Shafi</p>
        <p>
          &copy;
          {' '}
          {new Date().getFullYear()}
        </p>
      </div>
      <div className={style.social}>
        {links.map((obj, i) => (
          <a href={obj.link} key={i} rel="noreferrer" target="_blank">
            <img src={obj.image} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}
