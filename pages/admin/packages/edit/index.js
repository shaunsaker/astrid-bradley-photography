import React from 'react';

import EditPackage from '../../../../layouts/EditPackage';

const Page = (props) => {
  return <EditPackage {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const packageID = query.id;

  return { packageID };
};

export default Page;
