import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';

import styles from './styles';

import Placeholder from '../Placeholder';
import Icon from '../Icon';

const AddButton = ({ gridSize, isThumbnail, children, handleClick }) => {
  return (
    <Placeholder gridSize={gridSize} isThumbnail={isThumbnail}>
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
    </Placeholder>
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
