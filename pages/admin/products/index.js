import React from 'react';

import AdminProducts from '../../../layouts/AdminProducts';

const Page = (props) => {
  return <AdminProducts {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
