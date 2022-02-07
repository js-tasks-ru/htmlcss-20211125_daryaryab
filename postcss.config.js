module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('postcss-each'),
    require('postcss-for'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
