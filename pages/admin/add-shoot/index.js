import React from 'react';

import AddDocument from '../../../layouts/AddDocument';

const Page = (props) => {
  return <AddDocument title="Add Shoot" formName="shootForm" collectionURL="shoots" {...props} />;
};

Page.getInitialProps = async () => {};

export default Page;
