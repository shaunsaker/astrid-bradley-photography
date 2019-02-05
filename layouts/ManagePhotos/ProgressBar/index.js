import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ProgressBar = ({ progress }) => {
  const text = `${progress}%`;

  return (
    <div className="container shadow-sm">
      <div className="bar shadow-md" style={{ width: text }} />

      <style jsx>{styles}</style>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
};
ProgressBar.defaultProps = {};

export default ProgressBar;
