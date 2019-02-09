import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Image = ({ src, alt, children }) => {
  return (
    <div className="container relative">
      <img src={src} alt={alt} className="image" />

      {children}

      <style jsx>{styles}</style>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};
Image.defaultProps = {};

export default Image;
