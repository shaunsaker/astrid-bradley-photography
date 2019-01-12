import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <Page>
      <Header />

      <div className="flex">
        <div />
      </div>

      <Footer />
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
