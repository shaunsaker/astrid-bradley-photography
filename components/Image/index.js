import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Image = ({ src, alt, width, height, id, children }) => {
  return (
    <div className="container relative">
      <img src={src} alt={alt} id={id} width={width} height={height} className="image" />

      {children}

      <style jsx>{styles}</style>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.string,
  children: PropTypes.node,
};
Image.defaultProps = {};

export default Image;
