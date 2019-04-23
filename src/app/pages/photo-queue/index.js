import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

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
    await signInAnonymously();

    // Get all of the shoots
    const { collection } = await getCollection({ url: 'shoots' });

    return {
      shoots: collection,
    };
  } else {
    const { shoots } = store.getState();

    return {
      shoots,
    };
  }
};

export default Page;
