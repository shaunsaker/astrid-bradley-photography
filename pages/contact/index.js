import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ContactFormSection from '../../layouts/ContactFormSection';
import QuoteSection from '../../layouts/QuoteSection';

const Contact = () => {
  return (
    <Page>
      <Header />

      <main>
        <ContactFormSection />

        <QuoteSection />
      </main>

      <Footer />
    </Page>
  );
};

Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
