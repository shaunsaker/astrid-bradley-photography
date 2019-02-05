import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import IconButton from '../../../components/IconButton';

const Thumbnail = ({ src, alt, handleDelete, children }) => {
  const deleteComponent = handleDelete && (
    <div className="icon-button-container">
      <IconButton iconName="close" label="Delete Photo" small handleClick={handleDelete} />

      <style jsx>{styles}</style>
    </div>
  );

  return (
    <div key={src} className="container relative">
      <img src={src} alt={alt} className="thumbnail" />

      {children}

      {deleteComponent}

      <div className="spacer-vt" />

      <style jsx>{styles}</style>
    </div>
  );
};

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  handleDelete: PropTypes.func,
  children: PropTypes.node,
};
Thumbnail.defaultProps = {};

export default Thumbnail;
