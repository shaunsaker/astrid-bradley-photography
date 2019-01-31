import React from 'react';

import Shoot from '../../layouts/Shoot';

const Page = (props) => {
  return <Shoot {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const shootID = query.id;

  return { shootID };
};

export default Page;
