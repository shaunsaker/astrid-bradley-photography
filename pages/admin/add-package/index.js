import React from 'react';

import AddDocument from '../../../layouts/AddDocument';

const Page = (props) => {
  return (
    <AddDocument title="Add Package" formName="packageForm" collectionURL="packages" {...props} />
  );
};

Page.getInitialProps = async () => {};

export default Page;
