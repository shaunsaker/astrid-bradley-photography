import React from 'react';

import EditPackage from '../../../../layouts/EditPackage';

const Page = (props) => {
  return <EditPackage {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
