import React from 'react';
import PropTypes from 'prop-types';

import { getDocument } from '../../services/firestore';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ShootSection from '../../layouts/ShootSection';
import ContactButtonSection from '../../layouts/ContactButtonSection';

const Shoot = ({ shoot }) => {
  return (
    <Page>
      <Header />

      <main>
        <ShootSection shoot={shoot} />
      </main>

      <Footer />

      <ContactButtonSection />
    </Page>
  );
};

Shoot.getInitialProps = async ({ store, isServer, query }) => {
  const shootID = query.id;
  const { shoots } = store.getState();
  let shoot = shoots.filter((item) => item.id === shootID)[0];

  // Only fetch shoot if
  // We're rendering on the server OR
  // We're rendering on the client and we do not have that shoot
  const shouldFetchShoot = isServer || (!isServer && !shoot);

  // Only fetch shoot if (see above)
  // and the shootID was supplied
  if (shouldFetchShoot && shootID) {
    shoot = await getDocument({
      url: `shoots/${shootID}`,
    });

    // No need to update the store
  }

  return { shoot };
};

Shoot.propTypes = {
  shoot: PropTypes.shape({}),
};
Shoot.defaultProps = {};

export default Shoot;
