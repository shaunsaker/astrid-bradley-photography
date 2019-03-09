import React from 'react';

import AddProduct from '../../../../layouts/AddProduct';

const Page = (props) => {
  return <AddProduct {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
