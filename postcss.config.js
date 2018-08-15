const postcssEasyImport = require('postcss-easy-import');
const autoPrefixer  = require('autoprefixer');

module.exports = {
  plugins: [
    postcssEasyImport({ prefix: '_' }), // keep this first
    autoPrefixer({ /* ...options */ }), // so imports are auto-prefixed too
  ],
};
