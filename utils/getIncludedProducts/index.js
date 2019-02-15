const getIncludedProducts = (packageItem, products) => {
  const productsIncluded = [];

  Object.keys(packageItem).forEach((key) => {
    const targetString = 'products-included-';

    if (key.indexOf(targetString) > -1) {
      const productID = key.replace(targetString, '');
      const product = products.filter((item) => item.id === productID)[0];
      const productName = product.name;

      productsIncluded.push({
        name: productName,
        id: productID,
        qty: packageItem[key],
      });
    }
  });

  return productsIncluded;
};

export default getIncludedProducts;
