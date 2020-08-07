import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguagePicker from './LanguagePicker';

const Container = styled.div`
  margin: 0 auto;
  width: 70%;

  img {
    width: 100%;
  }
`;

export default function SecondPage() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t('title.second')}</h1>
      <LanguagePicker />
      <Link to="/">{t('link.home')}</Link>
    </Container>
  );
}
