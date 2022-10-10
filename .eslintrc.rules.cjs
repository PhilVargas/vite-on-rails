module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': [
      1,
      { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
    ],
    'react/react-in-jsx-scope': [0],
    'react/jsx-curly-brace-presence': [
      1,
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
  },
};
