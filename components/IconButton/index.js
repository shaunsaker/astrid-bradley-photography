import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Icon from '../Icon';
import Tooltip from './Tooltip';

const IconButton = ({ iconName, label, handleClick }) => {
  const tooltipComponent = label && <Tooltip text={label} />;

  return (
    <button type="button" onClick={handleClick} className="container shadow-lg shadow-hover-lg">
      <Icon name={iconName} color={colors.accent2} />

      <div className="tooltip-container">{tooltipComponent}</div>

      <style jsx>{styles}</style>
    </button>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string, // for tooltip
  handleClick: PropTypes.func,
};
IconButton.defaultProps = {};

export default IconButton;
