require.config({
  urlArgs: '_='+new Date().getTime(),
  baseUrl: '/js',
  map: {
    '*': {
      'css': './lib/require-css/css',
      'text': './lib/text/text'
    }
  },
  paths: {
    'jquery': './lib/jquery/dist/jquery',
    'underscore': './lib/underscore/underscore'
  }
})