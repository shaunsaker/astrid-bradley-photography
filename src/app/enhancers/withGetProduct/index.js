import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class withGetProduct extends React.Component {
    constructor(props) {
      super(props);

      this.getProduct = this.getProduct.bind(this);

      this.state = {};
    }

    static propTypes = {
      products: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        }),
      ),
    };

    static defaultProps = {};

    getProduct(product) {
      const { products } = this.props;
      const id = Object.keys(product)[0];
      const qty = product[id];
      const { name, price } = products.filter((item) => item.id === id)[0];

      return {
        name,
        price,
        id,
        qty,
      };
    }

    render() {
      return <ComposedComponent getProduct={this.getProduct} {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    const { products } = state;

    return {
      products,
    };
  }

  return connect(mapStateToProps)(withGetProduct);
};
