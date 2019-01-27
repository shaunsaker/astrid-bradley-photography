import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../components/Page';
import Header from '../../components/Header';
import ButtonsSection from '../../components/admin/ButtonsSection';
import Footer from '../../components/Footer';

class Admin extends React.Component {
  static getInitialProps = async () => {};

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Page>
        <Header />

        <main>
          <h1>Admin Dashboard</h1>

          <ButtonsSection />
        </main>

        <Footer />
      </Page>
    );
  }
}

Admin.getInitialProps = async () => {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Admin);
