import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Image from '../../../components/Image';
import DeleteFileButton from './DeleteFileButton';

const Photo = ({ src, alt, dir, gridSize, handlePhotoDeleted }) => {
  return (
    <Image src={src} alt={alt} gridSize={gridSize}>
      <div className="file-delete-button-container">
        <DeleteFileButton dir={dir} url={src} handleFileDeleted={handlePhotoDeleted} />
      </div>

      <style jsx>{styles}</style>
    </Image>
  );
};

Photo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  dir: PropTypes.string,
  gridSize: PropTypes.number,
  handlePhotoDeleted: PropTypes.func,
};
Photo.defaultProps = {};

export default Photo;