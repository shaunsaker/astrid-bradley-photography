import React from 'react';

import packages from '../../../data/packages.json';
import shoots from '../../../data/shoots.json';

import BuildQuote from '../../layouts/BuildQuote';

const Page = (props) => {
  return <BuildQuote {...props} />;
};

Page.getInitialProps = async ({ isServer, store }) => {
  /*
   * If we're on the server
   * Get the data locally
   * Else just get the data from the store
   */
  if (isServer) {
    return {
      packages,
      shoots,
    };
  } else {
    return {
      packages: store.getState().packages,
      shoots: store.getState.shoots,
    };
  }
};

export default Page;
