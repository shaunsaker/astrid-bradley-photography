import React from 'react';

import EditShoot from '../../../layouts/EditShoot';

const Page = (props) => {
  return <EditShoot {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const shootID = query.id;

  return { shootID };
};

export default Page;
