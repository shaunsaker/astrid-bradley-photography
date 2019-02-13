import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import AddDocumentSection from '../../components/AddDocumentSection';

const AddProduct = () => {
  return (
    <Layout title="Add Package">
      <AddDocumentSection formName="packageForm" collectionURL="packages" />
    </Layout>
  );
};

AddProduct.propTypes = {};
AddProduct.defaultProps = {};

export default AddProduct;
