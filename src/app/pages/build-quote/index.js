import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

import BuildQuote from '../../layouts/BuildQuote';

const Page = (props) => {
  return <BuildQuote {...props} />;
};

Page.getInitialProps = async () => {
  await signInAnonymously();

  const packages = await getCollection({ url: 'packages' });
  const shoots = await getCollection({ url: 'shoots' });

  return {
    packages: packages.collection,
    shoots: shoots.collection,
  };
};

export default Page;
