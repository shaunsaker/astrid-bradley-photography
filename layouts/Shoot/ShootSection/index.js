import React from 'react';
import PropTypes from 'prop-types';

import { getPrettyDate } from '../../../utils';
import styles from './styles';

import HeadingText from '../../../components/HeadingText';

const ShootSection = ({ shoot }) => {
  const { name, date, location, photos } = shoot;
  const prettyDate = getPrettyDate(date);

  return (
    <section className="container">
      <HeadingText>
        {prettyDate} | {location}
      </HeadingText>

      <div className="spacer-vt" />

      <div className="images-container row wrap">
        {photos.map((photo, index) => {
          return (
            <div key={photo} className="image-container">
              <img src={photo} alt={`${name}-${index + 1}`} />
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
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
ShootSection.defaultProps = {};

export default ShootSection;
