import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const HeadingText = ({ children }) => {
  return (
    <span>
      <h2>{children}</h2>

      <style jsx>{styles}</style>
    </span>
  );
};

HeadingText.propTypes = {
  children: PropTypes.string,
};
HeadingText.defaultProps = {};

export default HeadingText;
