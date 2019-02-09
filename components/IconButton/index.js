import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Spinner from '../Spinner';
import Icon from '../Icon';
import Tooltip from './Tooltip';

const IconButton = ({ iconName, label, small, loading, handleClick }) => {
  if (loading && small) {
    return <Spinner small={small} />;
  }

  const iconComponent = loading ? (
    <Spinner small />
  ) : (
    <Icon name={iconName} color={small ? colors.black : colors.white} size={small && 16} />
  );
  const tooltipComponent = label && <Tooltip text={label} />;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`container ${
        small ? 'small shadow-sm shadow-hover' : 'shadow-lg shadow-hover-lg'
      }`}
    >
      <div className="icon-container flex-center">{iconComponent}</div>

      <div className="tooltip-container">{tooltipComponent}</div>

      <style jsx>{styles}</style>
    </button>
  );
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  label: PropTypes.string, // for tooltip
  small: PropTypes.bool,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
};
IconButton.defaultProps = {};

export default IconButton;
