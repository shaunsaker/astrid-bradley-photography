import React from 'react';

import { productForm } from '../../config/forms';

import Layout from '../../components/Layout';
import EditDocumentSection from '../../components/EditDocumentSection';

import withAuth from '../../enhancers/withAuth';
import withGoBackOnSave from '../../enhancers/withGoBackOnSave';

const AddProduct = () => {
  return (
    <Layout title="Add Product">
      <EditDocumentSection form={productForm} collectionURL="products" />
    </Layout>
  );
};

AddProduct.propTypes = {};
AddProduct.defaultProps = {};

export default withAuth(withGoBackOnSave(AddProduct));
