import React from 'react';

import twitter from '../media/twitter.svg';
import whatsapp from '../media/whatsapp.svg';
import facebook from '../media/facebook.svg';
import messenger from '../media/messenger.svg';

export default function Footer() {
  return (
    <footer>
      <div className="text">
        <p>Created by Shafi Rayhan</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
      <div className="social">
        <a href="https://twitter.com/shafiemoji">
          <img src={twitter} alt="twitter profile" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=8801704792392">
          <img src={whatsapp} alt="" />
        </a>
        <a href="https://www.facebook.com/shafiemoji">
          <img src={facebook} alt="" />
        </a>
        <a href="https://m.me/shafiemoji">
          <img src={messenger} alt="" />
        </a>
      </div>
    </footer>
  );
}
