const addDynamicPages = ({ page, data, pathMap }) => {
  const newPathMap = pathMap;

  // Delete the dynamic page
  delete newPathMap[page];

  data.forEach((item) => {
    const { id } = item;
    const dynamicPage = `${page}/${id}`;

    newPathMap[dynamicPage] = { page, query: { id } };
  });

  return newPathMap;
};

module.exports = addDynamicPages;
