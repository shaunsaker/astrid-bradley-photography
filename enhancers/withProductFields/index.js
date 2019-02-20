import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class withProductFields extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    static propTypes = {
      products: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          id: PropTypes.string,
        }),
      ),
    };

    static defaultProps = {};

    render() {
      const { products } = this.props;
      const includedProductFields = products.map((product) => {
        const { id, name } = product;
        const label = `${name} (qty)`;

        return {
          type: 'number',
          name: id,
          label,
        };
      });
      const availableProductFields = products.map((product) => {
        const { id, name } = product;

        return {
          type: 'checkbox',
          name: id,
          label: name,
        };
      });
      const productFields = [
        {
          type: 'group',
          name: 'products_included',
          label: 'Products included:',
          fields: includedProductFields,
        },
        {
          type: 'group',
          name: 'products_available',
          label: 'Products available:',
          fields: availableProductFields,
        },
      ];

      return <ComposedComponent productFields={productFields} {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    const { products } = state;

    return {
      products,
    };
  };

  return connect(mapStateToProps)(withProductFields);
};
