import React from 'react';

import shoots from '../../../data/shoots.json';

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
    const shoot = shoots.filter((item) => item.id === id)[0];

    return { shoot };
  } else {
    const shootsArray = store.getState().shoot;
    const shoot = shootsArray.filter((item) => item.id === id)[0];

    return {
      shoot,
    };
  }
};

export default Page;
