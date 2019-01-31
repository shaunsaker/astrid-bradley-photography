import React from 'react';

import Contact from '../../layouts/Contact';

const Page = (props) => {
  return <Contact {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
