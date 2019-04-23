import React from 'react';

import shoots from '../../../data/shoots.json';

import Category from '../../layouts/Category';

const Page = (props) => {
  return <Category {...props} />;
};

Page.getInitialProps = async ({ isServer, query, store }) => {
  const { id } = query;

  /*
   * If we're on the server
   * Get the data locally
   * Else just get the data from the store
   */
  if (isServer) {
    return {
      shoots,
      categoryID: id,
    };
  } else {
    return {
      shoots: store.getState().shoots,
      categoryID: id,
    };
  }
};

export default Page;
