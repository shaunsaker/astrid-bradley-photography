import React from 'react';

import ManageProducts from '../../../layouts/ManageProducts';

const Page = (props) => {
  return <ManageProducts {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
