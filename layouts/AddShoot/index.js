import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import AddDocumentSection from '../../components/AddDocumentSection';

const AddProduct = () => {
  return (
    <Layout title="Add Shoot">
      <AddDocumentSection formName="shootForm" collectionURL="shoots" />
    </Layout>
  );
};

AddProduct.propTypes = {};
AddProduct.defaultProps = {};

export default AddProduct;
