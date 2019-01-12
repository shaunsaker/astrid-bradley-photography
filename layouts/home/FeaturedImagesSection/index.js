import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import ImageSlider from '../../../components/ImageSlider';

const FeaturedImagesSection = () => {
  return (
    <section>
      <ImageSlider />

      <style jsx>{styles}</style>
    </section>
  );
};

FeaturedImagesSection.propTypes = {};
FeaturedImagesSection.defaultProps = {};

export default FeaturedImagesSection;
