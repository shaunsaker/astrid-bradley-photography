import React from 'react';

import { signInAnonymously } from '../../services/auth';
import { getCollection } from '../../services/firestore';

import Shoot from '../../layouts/Shoot';

const Page = (props) => {
  return <Shoot {...props} />;
};

Page.getInitialProps = async ({ query }) => {
  const { id } = query;

  await signInAnonymously();

  const { collection } = await getCollection({ url: 'shoots', query: ['id', '==', id] });
  const shoot = collection[0];

  return { shoot };
};

export default Page;
