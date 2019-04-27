import React from 'react';

import shootsJSON from '../../../data/shoots.json';

import PhotoQueue from '../../layouts/PhotoQueue';

const Page = (props) => {
  return <PhotoQueue {...props} />;
};

Page.getInitialProps = async ({ isServer, store }) => {
  const shootsStore = store.getState().shoots;

  /*
   * If we're on the server OR we don't have shoots in the store
   * Get the data locally
   * Else just get the data from the store
   */
  if (isServer || !shootsStore.length) {
    return {
      shoots: shootsJSON,
    };
  } else {
    return {
      shoots: shootsStore,
    };
  }
};

export default Page;
