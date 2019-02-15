import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import AddDocumentSection from '../../components/AddDocumentSection';

import withAuth from '../../enhancers/withAuth';
import withGoBackOnSave from '../../enhancers/withGoBackOnSave';

const AddProduct = ({ products }) => {
  const extraFields = [
    {
      type: 'group',
      name: 'products-included',
      label: 'Products included:',
      fields: products.map((product) => {
        const { id, name } = product;
        const label = `${name} (qty)`;

        return {
          type: 'number',
          name: id,
          label,
        };
      }),
    },
    {
      type: 'group',
      name: 'products-available',
      label: 'Products available as add-ons:',
      fields: products.map((product) => {
        const { id, name } = product;

        return {
          type: 'checkbox',
          name: id,
          label: name,
        };
      }),
    },
  ];

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

export default withAuth(withGoBackOnSave(connect(mapStateToProps)(AddProduct)));
