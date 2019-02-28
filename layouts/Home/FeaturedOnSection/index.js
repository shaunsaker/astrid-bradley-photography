import React from 'react';

import styles from './styles';
import FEATURES from './features';

import TitleText from '../../../components/TitleText';
import Grid from '../../../components/Grid';
import Card from '../../../components/Card';

const FeaturedOnSection = () => {
  return (
    <section>
      <TitleText>Featured On</TitleText>

      <Grid size={4}>
        {FEATURES.map((feature) => {
          const { image, href } = feature;
          const { src, alt } = image;

          return (
            <Card
              key={src}
              shadow
              className="item-container"
              action={{ link: { href, target: '_blank' } }}
            >
              <img src={src} alt={alt} />
            </Card>
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
