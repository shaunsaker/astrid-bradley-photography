import React from 'react';

import AddPackage from '../../../../layouts/AddPackage';

const Page = (props) => {
  return <AddPackage {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
