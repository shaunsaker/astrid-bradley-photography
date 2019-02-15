import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class withGoBackOnSave extends React.Component {
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
      const productFields = [
        ...products.map((product, index) => {
          const { id, name } = product;
          const label = `${name} (qty)`;
          const headerText = index === 0 ? 'Products included:' : null;

          return {
            type: 'number',
            name: `products-included-${id}`,
            label,
            headerText,
          };
        }),
        ...products.map((product, index) => {
          const { id, name } = product;
          const headerText = index === 0 ? 'Products available as add-ons:' : null;

          return {
            type: 'checkbox',
            name: `products-available-${id}`,
            label: name,
            headerText,
          };
        }),
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

  return connect(mapStateToProps)(withGoBackOnSave);
};
