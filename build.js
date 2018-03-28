({
  appDir: './src',
  baseUrl: './js',
  dir: './dist',
  mainConfigFile: './src/require.config.js',
  modules: [
    {
      name: 'views/index',
      exclude: ['jquery']
    }
  ]
})