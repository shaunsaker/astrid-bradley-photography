import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Admin = () => {
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

Admin.getInitialProps = async ({ res, store }) => {
  const state = store.getState();
  const { user } = state;
  const { authenticated } = user;

  // IF the user is not authenticated
  // THEN redirect to the admin/login page
  if (!authenticated) {
    if (res) {
      // IF page is rendered server-side
      res.writeHead(302, {
        Location: '/admin/login',
      });
      res.end();
    } else {
      Router.push('/admin/login');
    }
  }

  return {};
};

Admin.propTypes = {};
Admin.defaultProps = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Admin);
