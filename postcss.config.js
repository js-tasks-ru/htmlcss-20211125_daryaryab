module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
