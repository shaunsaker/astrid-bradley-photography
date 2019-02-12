import React from 'react';

import PhotoQueue from '../../layouts/PhotoQueue';

const Page = (props) => {
  return <PhotoQueue {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
