import React from 'react';
import PropTypes from 'prop-types';

import { getPrettyDate } from '../../../utils';
import styles from './styles';

import HeadingText from '../../../components/HeadingText';
import ParagraphText from '../../../components/ParagraphText';
import Image from '../../../components/Image';

const ShootSection = ({ shoot }) => {
  const { date, location, photos, vendors } = shoot;
  const prettyDate = getPrettyDate(date);
  const headingText = `${prettyDate} | ${location}`;

  /*
   * Create the vendors array
   * Trim out new lines and blank spaces
   * Filter out falsy values
   * Return the shape we need
   */
  const vendorsArray =
    vendors &&
    vendors
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item)
      .map((item) => {
        const type = item.split('-')[0].trim();
        const name = item.split('-')[1].trim();
        const link = item.split('-')[2].trim();

        return { type, name, link };
      });

  const vendorsComponent = vendorsArray && (
    <div className="vendors-container">
      <HeadingText>Vendors</HeadingText>

      <div className="spacer-vt large" />

      {vendorsArray.map((item) => {
        return (
          <div key={item.name}>
            <div className="vendor-row-container">
              <ParagraphText>{`${item.type}:`}</ParagraphText>

              <a href={item.link} target="_blank" rel="noopener noreferrer" className="clickable">
                {item.name}
              </a>
            </div>

            <div className="spacer-vt" />
          </div>
        );
      })}

      <style jsx>{styles}</style>
    </div>
  );

  return (
    <section className="container">
      <HeadingText>{headingText}</HeadingText>

      <div className="spacer-vt" />

      <div className="images-container row wrap">
        {photos.map((photo) => {
          const { id } = photo;

          return (
            <div key={id} className="image-container">
              <Image {...photo} />
            </div>
          );
        })}
      </div>

      {vendorsComponent}

      <style jsx>{styles}</style>
    </section>
  );
};

ShootSection.propTypes = {
  shoot: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  }).isRequired,
};
ShootSection.defaultProps = {};

export default ShootSection;
