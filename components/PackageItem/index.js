import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getIncludedProducts } from '../../utils';
import styles from './styles';

import Card from '../Card';
import TitleText from '../TitleText';
import HeadingText from '../HeadingText';
import ParagraphText from '../ParagraphText';
import SmallText from '../SmallText';

const PackageItem = ({ packageItem, products, action }) => {
  const { name, price, time, photos, distance, notes } = packageItem;
  const includedProducts = getIncludedProducts(packageItem, products);
  const notesComponent = notes && (
    <Fragment>
      <SmallText>Notes:</SmallText>

      <div className="spacer-vt small" />

      <ParagraphText>{notes}</ParagraphText>
    </Fragment>
  );

  return (
    <Card action={action}>
      <HeadingText>{name}</HeadingText>

      <div className="spacer-vt" />

      <TitleText>{`R ${price}`}</TitleText>

      <ParagraphText>{time} hour</ParagraphText>

      <div className="spacer-vt" />

      <ParagraphText>{photos} photos</ParagraphText>

      <div className="spacer-vt" />

      <SmallText>Includes:</SmallText>

      <div className="spacer-vt small" />

      <ParagraphText>{distance * 2}km of travel</ParagraphText>

      <div className="spacer-vt" />

      {includedProducts.map((product, index) => {
        const { id, qty } = product;
        const productName = product.name;
        const spacerComponent = index !== includedProducts.length - 1 && (
          <div className="spacer-vt" />
        );

        return (
          <Fragment key={id}>
            <ParagraphText>
              {qty} X {productName}
            </ParagraphText>

            {spacerComponent}
          </Fragment>
        );
      })}

      {notesComponent}

      <style jsx>{styles}</style>
    </Card>
  );
};

PackageItem.propTypes = {
  packageItem: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    time: PropTypes.number,
    photos: PropTypes.number,
    distance: PropTypes.number,
    notes: PropTypes.string,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  action: PropTypes.shape({}),
};
PackageItem.defaultProps = {};

const mapStateToProps = (state) => {
  const { products } = state;

  return {
    products,
  };
};

export default connect(mapStateToProps)(PackageItem);
