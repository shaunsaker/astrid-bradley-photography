import React from 'react';

import shootsJSON from '../../../data/shoots.json';

import Category from '../../layouts/Category';

const Page = (props) => {
  return <Category {...props} />;
};

Page.getInitialProps = async ({ isServer, query, store }) => {
  const { id } = query;
  const shootsStore = store.getState().shoots;

  /*
   * If we're on the server OR we don't have shoots in the store
   * Get the data locally
   * Else just get the data from the store
   */
  if (isServer || !shootsStore.length) {
    return {
      shoots: shootsJSON,
      categoryID: id,
    };
  } else {
    return {
      shoots: shootsStore,
      categoryID: id,
    };
  }
};

export default Page;
