import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';
import FEATURES from './features';

const FeaturedOnSection = () => {
  return (
    <section>
      <h1>Featured On:</h1>

      {
        <ul className="row">
          {FEATURES.map((feature, index) => {
            const { image, href } = feature;
            const { src, alt } = image;

            return (
              <li key={src}>
                <Link href={href}>
                  <img src={src} alt={alt} />
                </Link>
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
