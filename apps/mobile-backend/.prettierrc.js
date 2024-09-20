module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: ['*.sql'],
      options: {
        parser: 'none'
      }
    }
  ]
};
