import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

import Category from '../../layouts/Category';

const Page = (props) => {
  return <Category {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const { id } = query;

  await signInAnonymously();

  // Get all of the shoots
  const { collection } = await getCollection({ url: 'shoots' });

  return {
    shoots: collection,
    categoryID: id,
  };
};

export default Page;
