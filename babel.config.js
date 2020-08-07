module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
        },
        useBuiltIns: 'usage',
        corejs: '3.6.4',
      },
    ],
    ['@babel/preset-react'],
  ],
  plugins: [
    [
      'i18next-extract',
      {
        outputPath: 'translations/{{locale}}.json',
        locales: ['en', 'de', 'hr'],
        discardOldKeys: true,
      },
    ],
    'styled-components',
    '@babel/proposal-optional-chaining',
    '@babel/proposal-nullish-coalescing-operator',
  ],

  env: {
    // production env
    production: {
      plugins: ['groundskeeper-willie'],
    },
  },
};
