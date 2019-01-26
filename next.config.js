const withImages = require('next-images');
const withFonts = require('next-fonts');
const compose = require('next-compose');

const fontsConfig = {};
const imagesConfig = {};

module.exports = compose([
  [withFonts, fontsConfig],
  [withImages, imagesConfig],
  {
    webpack: (config) => {
      return config;
    },
  },
]);
