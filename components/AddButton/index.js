import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';

import styles from './styles';

import GridItem from '../GridItem';
import Icon from '../Icon';

const AddButton = ({ gridSize, isThumbnail, children, handleClick }) => {
  return (
    <GridItem gridSize={gridSize} isThumbnail={isThumbnail}>
      <button
        type="button"
        onClick={handleClick}
        disabled={!handleClick}
        className="container flex relative flex-center"
      >
        <Icon name="add" color={colors.accent1} />

        {children}
      </button>

      <style jsx>{styles}</style>
    </GridItem>
  );
};

AddButton.propTypes = {
  gridSize: PropTypes.number,
  isThumbnail: PropTypes.bool,
  children: PropTypes.node, // typically used to pass an input[type=file]
  handleClick: PropTypes.func,
};
AddButton.defaultProps = {};

export default AddButton;
