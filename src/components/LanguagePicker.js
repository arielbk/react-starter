import React from 'react';
import i18n from '../i18n';

export default function LanguagePicker() {
  console.log(i18n.language);

  return (
    <div>
      <span onClick={() => i18n.changeLanguage('en')}>en</span>
      {' | '}
      <span onClick={() => i18n.changeLanguage('de')}>de</span>
      {' | '}
      <span onClick={() => i18n.changeLanguage('hr')}>hr</span>
    </div>
  );
}
