import React from 'react';

import Base from '../components/base';
import Head from '../components/head';

export default function Submission({ location }) {
  console.log(location);
  return (
    <Base>
      <Head title="Success" />
      <h1>Form Submitted Successfully!</h1>
    </Base>
  );
}
