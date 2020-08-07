import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  margin: 0 auto;
  width: 70%;

  img {
    width: 100%;
  }
`;

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t('title.notfound')}</h1>
      <Link to="/">{t('link.home')}</Link>
    </Container>
  );
};

export default NotFound;
