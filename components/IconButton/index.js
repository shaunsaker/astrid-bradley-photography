import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Icon from '../Icon';
import Tooltip from './Tooltip';

const IconButton = ({ iconName, label, small, handleClick }) => {
  const tooltipComponent = label && <Tooltip text={label} />;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`container ${
        small ? 'small shadow-sm shadow-hover' : 'shadow-lg shadow-hover-lg'
      }`}
    >
      <div className="icon-container">
        <Icon name={iconName} color={colors.white} size={small && 16} />
      </div>

      <div className="tooltip-container">{tooltipComponent}</div>

      <style jsx>{styles}</style>
    </button>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string, // for tooltip
  small: PropTypes.bool,
  handleClick: PropTypes.func,
};
IconButton.defaultProps = {};

export default IconButton;
