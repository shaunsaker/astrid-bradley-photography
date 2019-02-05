import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ProgressBar = ({ progress }) => {
  return (
    <div className="container">
      <div style={{ width: progress || 5 }} className="bar shadow-md" />

      <style jsx>{styles}</style>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
};
ProgressBar.defaultProps = {};

export default ProgressBar;
