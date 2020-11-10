import React from 'react';

import twitter from '../media/twitter.svg';
import whatsapp from '../media/whatsapp.svg';
import facebook from '../media/facebook.svg';
import messenger from '../media/messenger.svg';

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
];

export default function Footer() {
  return (
    <footer>
      <div className="text">
        <p>Created by Shafi Rayhan</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
      <div className="social">
        {links.map((obj) => {
          return (
            <a href={obj.link}>
              <img src={obj.image} alt="" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
