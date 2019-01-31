import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const TitleText = ({ children }) => {
  return (
    <span>
      <h1>{children}</h1>

      <style jsx>{styles}</style>
    </span>
  );
};

TitleText.propTypes = {
  children: PropTypes.string,
};
TitleText.defaultProps = {};

export default TitleText;
