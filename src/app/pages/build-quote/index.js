import React from 'react';

import packages from '../../../data/packages.json';
import shootsJSON from '../../../data/shoots.json';

import BuildQuote from '../../layouts/BuildQuote';

const Page = (props) => {
  return <BuildQuote {...props} />;
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
      packages,
      shoots: shootsJSON,
    };
  } else {
    return {
      packages: store.getState().packages,
      shoots: shootsStore,
    };
  }
};

export default Page;
