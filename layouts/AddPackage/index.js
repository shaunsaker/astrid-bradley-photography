import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import AddDocumentSection from '../../components/AddDocumentSection';

import withAuth from '../../wrappers/withAuth';

const AddProduct = ({ products }) => {
  const extraFields = products.map((product) => {
    const { id, name } = product;
    const fieldName = `product-${id}`;
    const label = `${name} (qty)`;

    return {
      type: 'number',
      name: fieldName,
      label,
    };
  });

  return (
    <Layout title="Add Package">
      <AddDocumentSection
        formName="packageForm"
        extraFields={extraFields}
        collectionURL="packages"
      />
    </Layout>
  );
};

AddProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
};
AddProduct.defaultProps = {};

const mapStateToProps = (state) => {
  const { products } = state;

  return {
    products,
  };
};

export default withAuth(connect(mapStateToProps)(AddProduct));
