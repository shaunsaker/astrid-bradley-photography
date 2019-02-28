import React from 'react';

import Layout from '../../components/Layout';
import ContactFormSection from './ContactFormSection';
import QuoteSection from '../../components/QuoteSection';

const Contact = () => {
  return (
    <Layout title="Get in Touch">
      <ContactFormSection />

      <QuoteSection />
    </Layout>
  );
};

Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
