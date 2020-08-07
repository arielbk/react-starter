import React from 'react';
import styled from 'styled-components';
import i18n from '../i18n';

const Container = styled.div`
  font-size: 21px;
  margin: 1rem;

  span {
    color: blue;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function LanguagePicker() {
  return (
    <Container>
      <span onClick={() => i18n.changeLanguage('en')}>en</span>
      {' | '}
      <span onClick={() => i18n.changeLanguage('de')}>de</span>
      {' | '}
      <span onClick={() => i18n.changeLanguage('hr')}>hr</span>
    </Container>
  );
}
