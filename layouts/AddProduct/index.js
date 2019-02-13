import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import AddDocumentSection from '../../components/AddDocumentSection';

const AddProduct = () => {
  return (
    <Layout title="Add Product">
      <AddDocumentSection formName="productForm" collectionURL="products" />
    </Layout>
  );
};

AddProduct.propTypes = {};
AddProduct.defaultProps = {};

export default AddProduct;
