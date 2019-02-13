import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import AddDocumentSection from '../../components/AddDocumentSection';

import withAuth from '../../wrappers/withAuth';

const AddProduct = () => {
  return (
    <Layout title="Add Package">
      <AddDocumentSection formName="packageForm" collectionURL="packages" />
    </Layout>
  );
};

AddProduct.propTypes = {};
AddProduct.defaultProps = {};

export default withAuth(AddProduct);
