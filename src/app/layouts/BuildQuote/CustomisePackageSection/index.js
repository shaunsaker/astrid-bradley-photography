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
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {
    const { products } = this.state;
    const { handleSubmit } = this.props;

    // Convert the products into products_included style
    // Remove the minimum qty so that we're only left with additional products
    // Filter out the items with 0 qty
    const additionalProducts = products
      .map((item) => {
        const { id, qty, minimum } = item;
        const product = {};
        product[id] = qty - minimum;

        return product;
      })
      .filter((item) => {
        const id = Object.keys(item)[0];
        const qty = item[id];

        return qty > 0;
      });

    handleSubmit(additionalProducts);
  }

  getProducts() {
    const { packageItem, getProduct } = this.props;

    /*
     * Filter out products that aren't available for this package
     */
    const { products_available } = packageItem;
    const productsAvailable = products_available.filter((item) => {
      const id = Object.keys(item)[0];
      const isAvailable = item[id]; // true || false

      if (isAvailable) {
        return item;
      }

      return null;
    });

    /*
     * Get the product details
     */
    const products = productsAvailable.map((item) => {
      const product = getProduct(item);
      product.qty = 0;
      product.minimum = 0;

      return product;
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
    const { packageItem } = this.props;

    // Map the products to costs (over and above the minimum)
    // Reduce those values into a total cost
    const productsPrice = products
      ? products
          .map((item) => item.price * (item.qty - item.minimum))
          .reduce((total, cost) => total + cost, 0)
      : 0;
    const totalPrice = packageItem.price + productsPrice;

    return (
      <section className="container flex">
        <HeadingText>{`Total: R ${totalPrice}`}</HeadingText>

        <div className="spacer-vt large" />

        <div className="products-container">
          {products &&
            products.map((item) => {
              const { id, name, price, qty, minimum } = item;

              return (
                <div key={id}>
                  <div className="product-container row">
                    <div className="product-actions-container row">
                      <IconButton
                        iconName="remove"
                        small
                        disabled={qty === minimum}
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

        <Button text="Next" action={{ type: 'button', handleClick: this.onSubmit }} />

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
