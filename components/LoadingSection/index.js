import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Spinner from '../Spinner';

const LoadingSection = ({ isFixed }) => {
  return (
    <div className={`container abs-stretch flex-center ${isFixed && 'fixed'}`}>
      <Spinner />

      <style jsx>{styles}</style>
    </div>
  );
};

LoadingSection.propTypes = {
  isFixed: PropTypes.bool,
};
LoadingSection.defaultProps = {};

export default LoadingSection;
