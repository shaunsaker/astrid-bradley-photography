import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const EditShoot = () => {
  return (
    <Page>
      <Header />

      <main>
        <h1>Edit a Shoot</h1>

        <div />
      </main>

      <Footer />
    </Page>
  );
};

EditShoot.getInitialProps = async () => {};

EditShoot.propTypes = {};
EditShoot.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(EditShoot);
