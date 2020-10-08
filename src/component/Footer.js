import React from 'react';

import fb from '../img/fb.svg';
import ld from '../img/ld.svg';
import msngr from '../img/msngr.svg';
import tw from '../img/tw.svg';
import yt from '../img/yt.svg';

function Footer() {
  return (
    <footer>
      <div>
        <p>Created by Shafi</p>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </div>
      <div className="social">
        <a href="https://twitter.com/shafiemoji">
          <img src={tw} alt="Shafi on twitter" />
        </a>
        <a href="https://facebook.com/shafiemoji">
          <img src={fb} alt="Shafi on facebook" />
        </a>
        <a href="https://m.me/shafiemoji">
          <img src={msngr} alt="Shafi on messenger" />
        </a>
        <a href="https://www.youtube.com/channel/UCbckCAnY7BYG35Gfv5Ni1_g">
          <img src={yt} alt="Shafi on youtube" />
        </a>
        <a href="https://www.linkedin.com/in/shafi-rayhan-9657501b2/">
          <img src={ld} alt="Shafi on linked in" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
