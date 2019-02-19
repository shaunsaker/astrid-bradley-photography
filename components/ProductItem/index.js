import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Card from '../Card';
import ParagraphText from '../ParagraphText';

const ProductItem = ({ product, action }) => {
  const { name, price } = product;

  return (
    <Card action={action}>
      <div className="container">
        <ParagraphText>{name}</ParagraphText>

        <ParagraphText>
          <b>R {price}</b>
        </ParagraphText>
      </div>

      <style jsx>{styles}</style>
    </Card>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  action: PropTypes.shape({}),
};
ProductItem.defaultProps = {};

export default ProductItem;
