import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';

import styles from './styles';

import Icon from '../Icon';

const AddButton = ({ children, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!handleClick}
      className="container flex relative flex-center"
    >
      <Icon name="add" color={colors.accent1} />

      {children}

      <style jsx>{styles}</style>
    </button>
  );
};

AddButton.propTypes = {
  children: PropTypes.node, // typically used to pass an input[type=file]
  handleClick: PropTypes.func,
};
AddButton.defaultProps = {};

export default AddButton;
