import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../translations/en.json';
import de from '../translations/de.json';
import hr from '../translations/hr.json';

// this dep would be used to fetch translations stored on BE
// here we will just store them as a static json file
// import Backend from 'i18next-http-backend';

// this instance initializes i18n and is where all the configuration for it goes
i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // order in which language should be detected
    order: ['localStorage', 'sessionStorage'],

    // if no language found, fallback to english
    fallbackLang: 'en',

    // we'll use babel to collate any missing terms
    saveMissing: false,
    updateMissing: false,

    // have a translations namespace used everywhere in the app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for React
    },

    // react options
    react: {
      bindI18nStore: 'added removed',
      bindI18n: 'languageChanged',
    },
  });

// using json files here to load translations
i18n.addResourceBundle('en', 'translations', en);
i18n.addResourceBundle('de', 'translations', de);
i18n.addResourceBundle('hr', 'translations', hr);

export default i18n;
