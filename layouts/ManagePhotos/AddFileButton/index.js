import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../static/styles/styleConstants';

import styles from './styles';

import GridItem from '../../../components/GridItem';
import Icon from '../../../components/Icon';

const Button = ({ gridSize, multiple, handleAddFiles }) => {
  return (
    <GridItem gridSize={gridSize}>
      <div className="container relative flex-center">
        <Icon name="add" color={colors.accent1} />

        <input
          type="file"
          multiple={multiple}
          accepts="image/*"
          onChange={(event) => handleAddFiles(event.target.files)}
          className="input abs-stretch"
        />
      </div>

      <style jsx>{styles}</style>
    </GridItem>
  );
};

Button.propTypes = {
  gridSize: PropTypes.number,
  multiple: PropTypes.bool,
  handleAddFiles: PropTypes.func,
};
Button.defaultProps = {};

export default Button;
