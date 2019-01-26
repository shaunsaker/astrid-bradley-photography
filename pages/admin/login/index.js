import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Login = () => {
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

Login.getInitialProps = async () => {};

Login.propTypes = {};
Login.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Login);
