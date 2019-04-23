import React from 'react';

import shoots from '../../../data/shoots.json';

import PhotoQueue from '../../layouts/PhotoQueue';

const Page = (props) => {
  return <PhotoQueue {...props} />;
};

Page.getInitialProps = async ({ isServer, store }) => {
  /*
   * If we're on the server
   * Get the data from firebase
   * Else just get the data from the store
   */
  if (isServer) {
    return {
      shoots,
    };
  } else {
    return {
      shoots: store.getState().shoots,
    };
  }
};

export default Page;
