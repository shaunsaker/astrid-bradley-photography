import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getPrettyDate } from '../../../utils';
import styles from './styles';

import ParagraphText from '../../../components/ParagraphText';
import Image from '../../../components/Image';

const ShootSection = ({ shoot }) => {
  const { name, date, location, photos } = shoot;
  const prettyDate = getPrettyDate(date);

  return (
    <section className="container">
      <ParagraphText>
        {prettyDate} | {location}
      </ParagraphText>

      <div className="spacer-vt" />

      <div className="row wrap">
        {photos.map((photo, index) => {
          return (
            <Fragment key={photo}>
              <Image src={photo} alt={`${name}-${index + 1}`} />

              <div className="spacer-vt" />
            </Fragment>
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
