import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const AddShoot = () => {
  return (
    <Page>
      <Header />

      <main>
        <div />
      </main>

      <Footer />
    </Page>
  );
};

AddShoot.getInitialProps = async () => {};

AddShoot.propTypes = {};
AddShoot.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(AddShoot);
