import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Icon from '../Icon';

const IconButton = ({ handleClick, name }) => {
  return (
    <button type="button" onClick={handleClick} className="shadow-lg shadow-hover-lg">
      <Icon name={name} color={colors.accent2} />

      <style jsx>{styles}</style>
    </button>
  );
};

IconButton.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
};
IconButton.defaultProps = {};

export default IconButton;
