import React from 'react';
import PropTypes from 'prop-types';

import { getPrettyDate } from '../../../utils';
import styles from './styles';

import HeadingText from '../../../components/HeadingText';
import Image from '../../../components/Image';

const ShootSection = ({ shoot }) => {
  const { date, location, photos } = shoot;
  const prettyDate = getPrettyDate(date);
  const headingText = `${prettyDate} | ${location}`;

  return (
    <section className="container">
      <HeadingText>{headingText}</HeadingText>

      <div className="spacer-vt" />

      <div className="images-container row wrap">
        {photos.map((photo) => {
          const { id } = photo;

          return (
            <div key={id} className="image-container">
              <img {...photo} />
            </div>
          );
        })}
      </div>

      <style jsx>{styles}</style>
    </section>
  );
};

ShootSection.propTypes = {
  shoot: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.number,
    location: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
  }).isRequired,
};
ShootSection.defaultProps = {};

export default ShootSection;
