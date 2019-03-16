const glob = require('glob');

const pathMap = {};

const getPathMap = () => {
  glob
    .sync('./src/app/pages/**/*.js', {
      ignore: ['./src/app/pages/_app.js', './src/app/pages/_document.js'],
    })
    .forEach((path) => {
      const page = path
        .split('pages')[1]
        .replace('/index.js', '')
        .replace('.js', ''); // _error.js

      if (!page) {
        pathMap['/'] = { page: '/' };
      } else if (page === '/_error') {
        pathMap['/404.html'] = { page };
      } else {
        pathMap[page] = { page };
      }
    });

  return pathMap;
};

module.exports = getPathMap;
