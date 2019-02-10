import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Image from '../../../components/Image';
import DeleteFileButton from './DeleteFileButton';

const Photo = ({ src, alt, width, height, dir, handlePhotoDeleted }) => {
  return (
    <div className="container relative">
      <Image src={src} alt={alt} width={width} height={height} />

      <div className="file-delete-button-container">
        <DeleteFileButton dir={dir} url={src} handleFileDeleted={handlePhotoDeleted} />
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Photo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  dir: PropTypes.string,
  handlePhotoDeleted: PropTypes.func,
};
Photo.defaultProps = {};

export default Photo;
