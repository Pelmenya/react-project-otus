module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          android: '67',
          ios: '12',
          edge: '17',
          firefox: '60',
          chrome: '64',
          safari: '11.1',
          esmodules: true,
        },
        useBuiltIns: 'usage',
        corejs: '3.6.4',
      },
    ],
    '@babel/preset-typescript',
  ],
};
