const getShoots = require('../getShoots');
const addDynamicPages = require('../addDynamicPages');

const addShootPages = async (pathMap) => {
  const shoots = await getShoots();
  const newPathMap = addDynamicPages({ page: '/shoot', data: shoots, pathMap });

  return newPathMap;
};

module.exports = addShootPages;
