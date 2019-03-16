const categories = require('../../app/config/categories');

const addCategoryPages = (pathMap) => {
  const newPathMap = pathMap;
  const page = '/category';

  // Delete the dynamic page
  delete newPathMap[page];

  categories.forEach((category) => {
    const { id } = category;
    const dynamicPage = `${page}/${id}`;

    newPathMap[dynamicPage] = { page, query: { id } };
  });

  return newPathMap;
};

module.exports = addCategoryPages;
