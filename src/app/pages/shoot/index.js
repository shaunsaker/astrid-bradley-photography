import React from 'react';

import shootsJSON from '../../../data/shoots.json';

import Shoot from '../../layouts/Shoot';

const Page = (props) => {
  return <Shoot {...props} />;
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
    const shoot = shootsJSON.filter((item) => item.id === id)[0];

    return { shoot };
  } else {
    const shoot = shootsStore.filter((item) => item.id === id)[0];

    return {
      shoot,
    };
  }
};

export default Page;
