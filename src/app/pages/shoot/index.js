import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

import Shoot from '../../layouts/Shoot';

const Page = (props) => {
  return <Shoot {...props} />;
};

Page.getInitialProps = async ({ isServer, query, store }) => {
  const { id } = query;

  /*
   * If we're on the server
   * Get the data from firebase
   * Else just get the data from the store
   */
  if (isServer) {
    await signInAnonymously();

    const { collection } = await getCollection({ url: 'shoots', query: ['id', '==', id] });
    const shoot = collection[0];

    return { shoot };
  } else {
    const { shoots } = store.getState();
    const shoot = shoots.filter((item) => item.id === id)[0];

    return {
      shoot,
    };
  }
};

export default Page;
