const data = require('../../data/shoots.json');
const addDynamicPages = require('../addDynamicPages');

const addShootPages = async (pathMap) => {
  const newPathMap = addDynamicPages({ page: '/shoot', data, pathMap });

  return newPathMap;
};

module.exports = addShootPages;
