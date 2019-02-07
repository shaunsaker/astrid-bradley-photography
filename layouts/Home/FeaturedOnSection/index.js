import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import FEATURES from './features';

import TitleText from '../../../components/TitleText';

const FeaturedOnSection = () => {
  return (
    <section>
      <TitleText>Featured On</TitleText>

      {
        <ul className="row wrap flex-center">
          {FEATURES.map((feature) => {
            const { image, href } = feature;
            const { src, alt } = image;

            return (
              <li key={src} className="shadow-hover">
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
