import React from 'react';

import Layout from '../../components/Layout';
import AddDocumentSection from '../../components/AddDocumentSection';

import withAuth from '../../wrappers/withAuth';
import withGoBackOnSave from '../../wrappers/withGoBackOnSave';

const AddProduct = () => {
  return (
    <Layout title="Add Product">
      <AddDocumentSection formName="productForm" collectionURL="products" />
    </Layout>
  );
};

AddProduct.propTypes = {};
AddProduct.defaultProps = {};

export default withAuth(withGoBackOnSave(AddProduct));
