import React from 'react';

import EditProduct from '../../../../layouts/EditProduct';

const Page = (props) => {
  return <EditProduct {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const productID = query.id;

  return { productID };
};

export default Page;
