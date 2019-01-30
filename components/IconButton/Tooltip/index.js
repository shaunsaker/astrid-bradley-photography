import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Tooltip = ({ text }) => {
  return (
    <div className="container shadow-lg">
      <small className="text">{text}</small>

      <style jsx>{styles}</style>
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string,
};
Tooltip.defaultProps = {};

export default Tooltip;
