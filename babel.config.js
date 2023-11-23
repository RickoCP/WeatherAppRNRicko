module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    '@babel/preset-typescript',
  ],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@data': './src/data',
          '@domains': './src/domain',
          '@presentation': './src/presentation',
          '@core': './src/core',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
  ],
};
