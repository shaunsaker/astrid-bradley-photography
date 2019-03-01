import React from 'react';

import ManagePhotos from '../../../../../layouts/ManagePhotos';

const Page = (props) => {
  return <ManagePhotos {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
