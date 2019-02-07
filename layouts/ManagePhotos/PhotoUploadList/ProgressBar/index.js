import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ProgressBar = ({ progress }) => {
  const progressPercent = `${progress}%`;

  return (
    <div className="wrapper abs-stretch flex-center">
      <div className="container">
        <div style={{ width: progressPercent }} className="bar flex-center shadow-md" />
      </div>

      <div className="spacer-vt" />

      <style jsx>{styles}</style>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
};
ProgressBar.defaultProps = {};

export default ProgressBar;
