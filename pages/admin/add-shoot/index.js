import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import FormSection from '../../../components/admin/add-shoot/FormSection';
import Footer from '../../../components/Footer';

const AddShoot = () => {
  return (
    <Page>
      <Header />

      <main>
        <h1>Add a Shoot</h1>

        <FormSection />
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
