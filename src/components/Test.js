import React from 'react';
import Print from './print';
import giger from '../assets/giger.jpg';

const Test = () => (
  <div>
    <Print />
    <h1>this is a text</h1>
    <img src={giger} alt="Giger pic" width={700} />
  </div>
);

export default Test;
