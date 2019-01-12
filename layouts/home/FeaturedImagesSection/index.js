import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import ImageSlider from '../../../components/ImageSlider';

const FeaturedImagesSection = () => {
  return (
    <div>
      <ImageSlider />

      <style jsx>{styles}</style>
    </div>
  );
};

FeaturedImagesSection.propTypes = {};
FeaturedImagesSection.defaultProps = {};

export default FeaturedImagesSection;
