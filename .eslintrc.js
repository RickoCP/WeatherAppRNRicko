module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'eslint-disable-next-line semi': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
