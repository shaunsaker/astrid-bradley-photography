const addDynamicPages = require('../addDynamicPages');
const categories = require('../../app/config/categories');

const addCategoryPages = (pathMap) => {
  const newPathMap = addDynamicPages({ page: '/category', data: categories, pathMap });

  return newPathMap;
};

module.exports = addCategoryPages;
