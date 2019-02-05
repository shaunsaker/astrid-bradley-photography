import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';

import styles from './styles';

import Icon from '../Icon';

const AddButton = ({ handleClick }) => {
  return (
    <button
      type="button"
      className={`container flex ${handleClick && 'shadow-sm shadow-hover'}`}
      onClick={handleClick}
      disabled={!handleClick}
    >
      <Icon name="add" size={36} color={colors.accent1} />

      <style jsx>{styles}</style>
    </button>
  );
};

AddButton.propTypes = {
  handleClick: PropTypes.func,
};
AddButton.defaultProps = {};

export default AddButton;
