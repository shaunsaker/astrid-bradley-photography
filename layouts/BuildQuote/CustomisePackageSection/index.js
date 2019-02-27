import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import HeadingText from '../../../components/HeadingText';
import ParagraphText from '../../../components/ParagraphText';
import IconButton from '../../../components/IconButton';
import Button from '../../../components/Button';

import withGetProduct from '../../../enhancers/withGetProduct';

class CustomisePackageSection extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.setProducts = this.setProducts.bind(this);

    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    const products = this.getProducts();

    this.setProducts(products);
  }

  onChange(product, change) {
    const { minimum, id } = product;
    const { products } = this.state;
    const targetProduct = products.filter((item) => item.id === id)[0];
    const { qty } = targetProduct;
    const newQty = qty + change;

    // IF the qty + change >= minimum
    // THEN set the new products
    if (newQty >= minimum) {
      const newProducts = products.map((item) => {
        return {
          ...item,
          qty: item.id === id ? newQty : item.qty,
        };
      });

      this.setProducts(newProducts);
    }
  }

  getProducts() {
    const { packageItem, getProduct } = this.props;

    const { products_included, products_available } = packageItem;
    let products = products_included.map((item) => {
      const product = getProduct(item);

      return product;
    });

    products_available.forEach((item) => {
      const id = Object.keys(item)[0];
      const isAvailable = item[id];

      if (isAvailable) {
        // Push it to products if its not already present
        const isProductPresentInProducts = products.filter((product) => product.id === id).length;

        if (!isProductPresentInProducts) {
          const product = getProduct(item);
          product.qty = 0;

          products.push(product);
        }
      }
    });

    // Set the minimum
    products = products.map((product) => {
      const { qty } = product;

      return {
        ...product,
        minimum: qty,
      };
    });

    return products;
  }

  setProducts(products) {
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    const { packageItem, handleSubmit } = this.props;

    // Map the products to costs (over and above the minimum)
    // Reduce those values into a total cost
    const productsPrice = products
      ? products
          .map((item) => item.price * (item.qty - item.minimum))
          .reduce((total = 0, cost) => total + cost)
      : 0;
    const totalPrice = packageItem.price + productsPrice;

    // TODO: Handle submit needs to get products back to products_included

    return (
      <section className="container flex">
        <HeadingText>{`Total: R ${totalPrice}`}</HeadingText>

        <div className="spacer-vt large" />

        <div className="products-container">
          {products &&
            products.map((item) => {
              const { id, name, price, qty } = item;

              return (
                <div key={id}>
                  <div className="product-container row">
                    <div className="product-actions-container row">
                      <IconButton
                        iconName="remove"
                        small
                        handleClick={() => this.onChange(item, -1)}
                      />

                      <div className="spacer-hz small" />

                      <div className="product-qty-container">
                        <ParagraphText>{qty}</ParagraphText>
                      </div>

                      <div className="spacer-hz small" />

                      <IconButton iconName="add" small handleClick={() => this.onChange(item, 1)} />
                    </div>

                    <div className="spacer-hz" />

                    <div className="product-name-container">
                      <ParagraphText>{name}</ParagraphText>
                    </div>

                    <ParagraphText>{`R ${price}`}</ParagraphText>
                  </div>

                  <div className="spacer-vt" />
                </div>
              );
            })}
        </div>

        <div className="spacer-vt" />

        <Button text="Next" action={{ type: 'button', handleClick: handleSubmit }} />

        <style jsx>{styles}</style>
      </section>
    );
  }
}

CustomisePackageSection.propTypes = {
  packageItem: PropTypes.shape({
    products_included: PropTypes.arrayOf(PropTypes.shape({})),
    products_available: PropTypes.arrayOf(PropTypes.shape({})),
    price: PropTypes.number,
  }),
  handleSubmit: PropTypes.func,
  getProduct: PropTypes.func, // withGetProduct
};
CustomisePackageSection.defaultProps = {};

export default withGetProduct(CustomisePackageSection);
