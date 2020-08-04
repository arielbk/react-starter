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

const NotFound = () => (
  <Container>
    <h1>The page wasn&apos;t found!</h1>
    <Link to="/">Go home</Link>
  </Container>
);

export default NotFound;
