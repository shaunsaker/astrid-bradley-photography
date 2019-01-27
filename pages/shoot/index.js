import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../components/Page';
import Header from '../../components/Header';
import ShootSection from '../../components/shoot/ShootSection';
import Footer from '../../components/Footer';
import ContactButton from '../../components/ContactButton';

const Shoot = ({ shootID, shoots }) => {
  const shoot = shoots.filter((item) => item.id === shootID)[0];
  const shootComponent = shoot && <ShootSection shoot={shoot} />;

  return (
    <Page>
      <Header />

      <main>{shootComponent}</main>

      <Footer />

      <ContactButton />
    </Page>
  );
};

Shoot.getInitialProps = async ({ query }) => {
  const shootID = query.id;

  return { shootID };
};

Shoot.propTypes = {
  shootID: PropTypes.string,
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
Shoot.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default connect(mapStateToProps)(Shoot);
