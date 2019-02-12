import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import ContactButton from '../../components/ContactButton';

const BuildQuote = () => {
  return (
    <Layout title="Build Quote">
      <ContactButton />
    </Layout>
  );
};

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

export default BuildQuote;
