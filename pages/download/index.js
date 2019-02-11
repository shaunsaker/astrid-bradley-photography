import React from 'react';

import Download from '../../layouts/Download';

const Page = (props) => {
  return <Download {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const shootID = query.id;

  return { shootID };
};

export default Page;
