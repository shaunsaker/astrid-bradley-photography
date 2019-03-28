import React from 'react';

import styles from './styles';
import FEATURES from './features';

import TitleText from '../../../components/TitleText';
import Grid from '../../../components/Grid';

const FeaturedOnSection = () => {
  return (
    <section>
      <TitleText>Featured On</TitleText>

      <Grid size={4}>
        {FEATURES.map((feature) => {
          const { image, href } = feature;
          const { src, alt } = image;

          return (
            <a
              key={src}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="item-container flex flex-center"
            >
              <img src={src} alt={alt} />
            </a>
          );
        })}
      </Grid>

      <style jsx>{styles}</style>
    </section>
  );
};

FeaturedOnSection.propTypes = {};
FeaturedOnSection.defaultProps = {};

export default FeaturedOnSection;
