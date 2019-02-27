import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import HeadingText from '../../../components/HeadingText';
import ParagraphText from '../../../components/ParagraphText';
import IconButton from '../../../components/IconButton';
import Button from '../../../components/Button';

import withGetProduct from '../../../enhancers/withGetProduct';

const CustomisePackageSection = ({ packageItem, handleChange, handleSubmit, getProduct }) => {
  console.log(packageItem);

  // List the products_included
  // List and include the products_available
  // Allow increment
  // Show prices and effect on price total

  return (
    <section className="container flex">
      <HeadingText>Customise Products in your Package</HeadingText>

      <div className="spacer-vt" />

      <Button text="Next" action={{ type: 'button', handleClick: handleSubmit }} />

      <style jsx>{styles}</style>
    </section>
  );
};

CustomisePackageSection.propTypes = {
  packageItem: PropTypes.shape({
    products_included: PropTypes.arrayOf(PropTypes.shape({})),
    products_available: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  getProduct: PropTypes.func, // withGetProduct
};
CustomisePackageSection.defaultProps = {};

export default withGetProduct(CustomisePackageSection);
