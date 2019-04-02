import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

import PhotoQueue from '../../layouts/PhotoQueue';

const Page = (props) => {
  return <PhotoQueue {...props} />;
};

Page.getInitialProps = async () => {
  await signInAnonymously();

  // Get all of the shoots
  const { collection } = await getCollection({ url: 'shoots' });

  return {
    shoots: collection,
  };
};

export default Page;
