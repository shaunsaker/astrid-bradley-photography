const addDynamicPages = require('../addDynamicPages');

const addShootPages = (pathMap) => {
  const shoots = []; // TODO: Fetch the shoots
  const newPathMap = addDynamicPages({ page: '/shoot', data: shoots, pathMap });

  return newPathMap;
};

module.exports = addShootPages;
