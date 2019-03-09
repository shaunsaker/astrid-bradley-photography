import React from 'react';

import Admin from '../../layouts/Admin';

const Page = (props) => {
  return <Admin {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
