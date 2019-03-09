import React from 'react';

import Category from '../../layouts/Category';

const Page = (props) => {
  return <Category {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
