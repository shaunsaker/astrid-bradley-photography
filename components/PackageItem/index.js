import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Card from '../Card';
import TitleText from '../TitleText';
import HeadingText from '../HeadingText';
import ParagraphText from '../ParagraphText';
import SmallText from '../SmallText';

import withGetProduct from '../../enhancers/withGetProduct';

const PackageItem = ({ packageItem, getProduct, action }) => {
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
      <div className="container">
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
            const actualProduct = getProduct(product);

            if (!actualProduct.qty) {
              return null;
            }

            return (
              <Fragment key={actualProduct.id}>
                <ParagraphText>
                  {actualProduct.qty} X {actualProduct.name}
                  {actualProduct.qty > 1 ? 's' : ''}
                </ParagraphText>

                <div className="spacer-vt" />
              </Fragment>
            );
          })}

        {notesComponent}
      </div>

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
  getProduct: PropTypes.func, // withGetProduct
  action: PropTypes.shape({}),
};
PackageItem.defaultProps = {};

export default withGetProduct(PackageItem);
