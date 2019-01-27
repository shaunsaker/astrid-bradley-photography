import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import ContactFormSection from '../../components/contact/ContactFormSection';
import QuoteSection from '../../components/QuoteSection';
import Footer from '../../components/Footer';

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
