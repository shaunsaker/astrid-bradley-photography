import React from 'react';

import Home from '../../layouts/Home';

const Page = (props) => {
  return <Home {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
