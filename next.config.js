const withImages = require('next-images');
const withSASS = require('@zeit/next-sass');
const compose = require('next-compose');

const imagesConfig = {};
const sassConfig = {};

module.exports = compose([
  [withImages, imagesConfig],
  [withSASS, sassConfig],
  {
    webpack: (config) => {
      return config;
    },
  },
]);
