import React from 'react';
import PropTypes from 'prop-types';

import { getPrettyDate } from '../../../utils';
import styles from './styles';

const ShootSection = ({ shoot }) => {
  const { name, date, location, photos } = shoot;
  const prettyDate = getPrettyDate(date);

  return (
    <div className="container">
      <p>
        {prettyDate} | {location}
      </p>

      <div className="spacer-vt" />

      {photos.map((photo, index) => {
        return <img key={photo} src={photo} alt={`${name}-${index + 1}`} className="spacer-vt" />;
      })}

      <style jsx>{styles}</style>
    </div>
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
