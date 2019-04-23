import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

import BuildQuote from '../../layouts/BuildQuote';

const Page = (props) => {
  return <BuildQuote {...props} />;
};

Page.getInitialProps = async ({ isServer, store }) => {
  /*
   * If we're on the server
   * Get the data from firebase
   * Else just get the data from the store
   */
  if (isServer) {
    await signInAnonymously();

    const packages = await getCollection({ url: 'packages' });
    const shoots = await getCollection({ url: 'shoots' });

    return {
      packages: packages.collection,
      shoots: shoots.collection,
    };
  } else {
    const { packages, shoots } = store.getState();

    return {
      packages,
      shoots,
    };
  }
};

export default Page;
