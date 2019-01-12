const withImages = require('next-images');
const withSASS = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const compose = require('next-compose');

const fontsConfig = {};
const imagesConfig = {};
const sassConfig = {};

module.exports = compose([
  [withFonts, fontsConfig],
  [withImages, imagesConfig],
  [withSASS, sassConfig],
  {
    webpack: (config) => {
      return config;
    },
  },
]);
