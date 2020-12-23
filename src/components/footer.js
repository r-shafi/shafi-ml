import React from 'react';

import footerCSS from '../style/footer.module.css';

import twitter from '../media/twitter.svg';
import whatsapp from '../media/whatsapp.svg';
import facebook from '../media/facebook.svg';
import messenger from '../media/messenger.svg';
import github from '../media/github.svg';
import ig from '../media/ig.svg';

const links = [
  {
    image: twitter,
    link: 'https://twitter.com/shafiemoji',
  },
  {
    image: whatsapp,
    link: 'https://api.whatsapp.com/send?phone=8801704792392',
  },
  {
    image: facebook,
    link: 'https://www.facebook.com/shafiemoji',
  },
  {
    image: messenger,
    link: 'https://m.me/shafiemoji',
  },
  {
    image: github,
    link: 'https://github.com/r-shafi',
  },
  {
    image: ig,
    link: 'https://www.instagram.com/shafiemoji',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className={footerCSS.text}>
        <p>Created by Shafi Rayhan</p>
        <p>
          &copy;
          {' '}
          {new Date().getFullYear()}
        </p>
      </div>
      <div className={footerCSS.social}>
        {links.map((obj, i) => (
          <a href={obj.link} key={i} rel="noreferrer" target="_blank">
            <img src={obj.image} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}
