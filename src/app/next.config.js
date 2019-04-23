const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

const addCategoryPages = require('../scripts/addCategoryPages');
const addShootPages = require('../scripts/addShootPages');

const fontsConfig = {};
const imagesConfig = {};

module.exports = withPlugins([
  [withFonts, fontsConfig],
  [withImages, imagesConfig],
  {
    exportPathMap: (defaultPathMap) => {
      let pathMap = defaultPathMap;
      // pathMap = addCategoryPages(pathMap);
      // pathMap = addShootPages(pathMap);

      return pathMap;
    },
    webpack: (config) => {
      return config;
    },
  },
]);
