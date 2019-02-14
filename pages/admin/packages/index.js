import React from 'react';

import AdminPackages from '../../../layouts/AdminPackages';

const Page = (props) => {
  return <AdminPackages {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
