import React from 'react';

import ManageLayout from '../../../layouts/ManageLayout';

const Page = (props) => {
  return <ManageLayout {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const shootID = query.id;

  return { shootID };
};

export default Page;
