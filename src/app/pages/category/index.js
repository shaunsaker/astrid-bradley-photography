import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

import Category from '../../layouts/Category';

const Page = (props) => {
  return <Category {...props} />;
};

Page.getInitialProps = async ({ isServer, query, store }) => {
  const { id } = query;

  /*
   * If we're on the server
   * Get the shoots from firebase
   * Else just get the shoots from the store
   */
  if (isServer) {
    await signInAnonymously();

    // Get all of the shoots
    const { collection } = await getCollection({ url: 'shoots' });

    return {
      shoots: collection,
      categoryID: id,
    };
  } else {
    const { shoots } = store.getState();

    return {
      shoots,
      categoryID: id,
    };
  }
};

export default Page;
