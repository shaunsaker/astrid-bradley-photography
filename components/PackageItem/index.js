import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Card from '../Card';
import TitleText from '../TitleText';
import HeadingText from '../HeadingText';
import ParagraphText from '../ParagraphText';
import SmallText from '../SmallText';

const PackageItem = ({ packageItem, products, action }) => {
  const { name, price, time, photos, distance, notes, products_included } = packageItem;
  const notesComponent = notes && (
    <Fragment>
      <SmallText>Notes:</SmallText>

      <div className="spacer-vt small" />

      <ParagraphText>{notes}</ParagraphText>
    </Fragment>
  );

  return (
    <Card action={action} containerStyle={{ height: '100%' }} style={{ height: '100%' }}>
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

      {products_included &&
        products_included.map((product) => {
          const id = Object.keys(product)[0];
          const qty = product[id];

          if (!qty) {
            return null;
          }

          const productName = products.filter((item) => item.id === id)[0].name;

          return (
            <Fragment key={id}>
              <ParagraphText>
                {qty} X {productName}
                {qty > 1 ? 's' : ''}
              </ParagraphText>

              <div className="spacer-vt" />
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
