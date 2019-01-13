import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import FEATURES from './features';

const FeaturedOnSection = () => {
  return (
    <section>
      <h1>Featured On:</h1>

      {
        <ul className="row">
          {FEATURES.map((feature) => {
            const { image, href } = feature;
            const { src, alt } = image;

            return (
              <li key={src}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img src={src} alt={alt} />
                </a>
              </li>
            );
          })}
        </ul>
      }

      <style jsx>{styles}</style>
    </section>
  );
};

FeaturedOnSection.propTypes = {};
FeaturedOnSection.defaultProps = {};

export default FeaturedOnSection;
