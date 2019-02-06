import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../static/styles/styleConstants';

import styles from './styles';

import GridItem from '../../../components/GridItem';
import Icon from '../../../components/Icon';

const AddPhotosButton = ({ gridSize, multiple, handleChange }) => {
  return (
    <GridItem gridSize={gridSize}>
      <div className="container relative">
        <Icon name="add" color={colors.accent1} />

        <input
          type="file"
          multiple={multiple}
          accepts="image/*"
          onChange={handleChange}
          className="input"
        />
      </div>

      <style jsx>{styles}</style>
    </GridItem>
  );
};

AddPhotosButton.propTypes = {
  gridSize: PropTypes.number,
  multiple: PropTypes.bool,
  handleChange: PropTypes.func,
};
AddPhotosButton.defaultProps = {};

export default AddPhotosButton;
