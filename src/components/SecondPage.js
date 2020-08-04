import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
  width: 70%;

  img {
    width: 100%;
  }
`;

export default function SecondPage() {
  return (
    <Container>
      <h1>The second page</h1>
      <Link to="/">Go home</Link>
    </Container>
  );
}
