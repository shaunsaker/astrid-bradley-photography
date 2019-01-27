import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BuildQuote = () => {
  return (
    <Page>
      <Header />

      <main>
        <h1>Build a Quote</h1>

        <div />
      </main>

      <Footer />
    </Page>
  );
};

BuildQuote.getInitialProps = async () => {};

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(BuildQuote);
