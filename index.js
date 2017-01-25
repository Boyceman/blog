require('babel-polyfill');
require('babel-register')({
  extensions: ['.js', '.vue']
});
require('./app/app.js')
