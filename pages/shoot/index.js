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

Shoot.getInitialProps = async ({ query }) => {
  const shootID = query.id;
  let shoot;

  if (shootID) {
    shoot = await getDocument({
      url: `shoots/${shootID}`,
    });
  }

  return { shoot };
};

Shoot.propTypes = {
  shoot: PropTypes.shape({}),
};
Shoot.defaultProps = {};

export default Shoot;
