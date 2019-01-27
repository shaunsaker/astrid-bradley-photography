import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PhotoQueue = () => {
  return (
    <Page>
      <Header />

      <main>
        <h1>Photo Queue</h1>

        <div />
      </main>

      <Footer />
    </Page>
  );
};

PhotoQueue.getInitialProps = async () => {};

PhotoQueue.propTypes = {};
PhotoQueue.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(PhotoQueue);
