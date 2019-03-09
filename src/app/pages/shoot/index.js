import React from 'react';

import Shoot from '../../layouts/Shoot';

const Page = (props) => {
  return <Shoot {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
