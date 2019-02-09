import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import AddButton from '../../../components/AddButton';

const Button = ({ gridSize, multiple, isThumbnail, handleAddFiles }) => {
  return (
    <AddButton gridSize={gridSize} isThumbnail={isThumbnail}>
      <input
        type="file"
        multiple={multiple}
        accepts="image/*"
        onChange={(event) => handleAddFiles(event.target.files)}
        className="input abs-stretch"
      />

      <style jsx>{styles}</style>
    </AddButton>
  );
};

Button.propTypes = {
  gridSize: PropTypes.number,
  multiple: PropTypes.bool,
  isThumbnail: PropTypes.bool,
  handleAddFiles: PropTypes.func,
};
Button.defaultProps = {};

export default Button;
