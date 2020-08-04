import React from 'react';
import styled from 'styled-components';
import Print from './print';
import giger from '../assets/giger.jpg';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;

  img {
    width: 100%;
  }
`;

const Test = () => {
  const obj = {
    // first: {
    second: {
      third: 42,
      another: 0,
    },
    // },
  };

  // an example of tc39 proposal optional chaining (transpiled with Babel)
  // this will just print undefined if any 'level' does not exist
  console.log(obj?.first?.second?.third); // 42

  // an example of tc39 proposal nullish coalescence
  const notNullish = 0 ?? 'fallback';
  console.log(notNullish); // 0
  const falsey = 0 || 'fallback';
  console.log(falsey); // fallback

  return (
    <Container>
      <Print />
      <h1>this is a text</h1>
      <img src={giger} alt="Giger pic" />
    </Container>
  );
};

export default Test;
