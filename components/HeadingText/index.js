import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const HeadingText = ({ children }) => {
  return (
    <div>
      <h2>{children}</h2>

      <style jsx>{styles}</style>
    </div>
  );
};

HeadingText.propTypes = {
  children: PropTypes.string,
};
HeadingText.defaultProps = {};

export default HeadingText;
