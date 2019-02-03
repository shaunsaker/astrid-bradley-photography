import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';

import styles from './styles';

import Icon from '../Icon';

const AddPhotoButton = ({ handleClick }) => {
  return (
    <button type="button" className="container flex shadow-sm shadow-hover" onClick={handleClick}>
      <Icon name="add" size={36} color={colors.accent} />

      <style jsx>{styles}</style>
    </button>
  );
};

AddPhotoButton.propTypes = {
  handleClick: PropTypes.func,
};
AddPhotoButton.defaultProps = {};

export default AddPhotoButton;
