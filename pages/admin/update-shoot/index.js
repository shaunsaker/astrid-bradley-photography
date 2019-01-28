import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const UpdateShoot = () => {
  return (
    <Page>
      <Header />

      <main>
        <h1>Update a Shoot</h1>

        <div />
      </main>

      <Footer />
    </Page>
  );
};

UpdateShoot.getInitialProps = async () => {};

UpdateShoot.propTypes = {};
UpdateShoot.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(UpdateShoot);
