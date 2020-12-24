import React from 'react';

import Base from '../components/base';
import Head from '../components/head';

import four from '../media/404.svg';

import style from '../style/error.module.css';

export default function FourOFour() {
  return (
    <Base>
      <Head title="404" />
      <div className={style.error}>
        <img src={four} alt="Page not found" />
      </div>
    </Base>
  );
}
