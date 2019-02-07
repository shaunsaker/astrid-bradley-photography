import React from 'react';

import styles from './styles';

import Spinner from '../Spinner';

const LoadingSection = () => {
  return (
    <div className="container abs-stretch flex-center">
      <Spinner />

      <style jsx>{styles}</style>
    </div>
  );
};

LoadingSection.propTypes = {};
LoadingSection.defaultProps = {};

export default LoadingSection;
