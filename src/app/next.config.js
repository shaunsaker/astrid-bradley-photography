const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');

const getPathMap = require('../scripts/getPathMap');
const addCategoryPages = require('../scripts/addCategoryPages');

const fontsConfig = {};
const imagesConfig = {};

module.exports = withPlugins([
  [withFonts, fontsConfig],
  [withImages, imagesConfig],
  {
    exportPathMap: async () => {
      // TODO: Get fb data
      // TODO: Overwrite dynamic paths with static paths based on fb data
      // TODO: Extract to function
      // TODO: Setup webhook in Netlify
      let pathMap = getPathMap();
      pathMap = addCategoryPages(pathMap);

      return pathMap;
    },
    webpack: (config) => {
      return config;
    },
  },
]);
