import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { sayThis } from 'Utilities/sayThings';
import giger from 'Assets/giger.jpg';

const Container = styled.div`
  margin: 0 auto;
  width: 70%;

  img {
    width: 100%;
  }
`;

export default function Test() {
  sayThis();

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
      <h1>this is a text</h1>
      <Link to="second">Go the the second page</Link>
      <img src={giger} alt="Giger pic" />
    </Container>
  );
}
