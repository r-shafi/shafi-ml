import React from 'react';

import Base from '../components/base';
import Head from '../components/head';

import four from '../media/404.svg';

export default function FourOFour() {
  return (
    <Base>
      <Head title="404" />
      <div className="fourimage">
        <img src={four} alt="" />
      </div>
    </Base>
  );
}
