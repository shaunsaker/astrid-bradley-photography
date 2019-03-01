import React from 'react';

import EditProduct from '../../../../layouts/EditProduct';

const Page = (props) => {
  return <EditProduct {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
