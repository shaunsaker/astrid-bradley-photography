import React from 'react';

import BuildQuote from '../../layouts/BuildQuote';

const Page = (props) => {
  return <BuildQuote {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
