import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Spinner from './Spinner';

const LoadingSection = () => {
  return (
    <div className="container">
      <Spinner />

      <style jsx>{styles}</style>
    </div>
  );
};

LoadingSection.propTypes = {};
LoadingSection.defaultProps = {};

export default LoadingSection;
