import React from 'react';

import AdminShoots from '../../../layouts/AdminShoots';

const Page = (props) => {
  return <AdminShoots {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
