import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <Page>
      <Header />

      <main className="flex" style={{ flex: 1 }}>
        <div />
      </main>

      <Footer />
    </Page>
  );
};

Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
