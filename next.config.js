const withImages = require('next-images');
const compose = require('next-compose');

const imagesConfig = {};

module.exports = compose([
  [withImages, imagesConfig],
  {
    webpack: (config) => {
      return config;
    },
  },
]);
