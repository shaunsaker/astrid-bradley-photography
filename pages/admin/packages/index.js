import React from 'react';

import ManagePackages from '../../../layouts/ManagePackages';

const Page = (props) => {
  return <ManagePackages {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
