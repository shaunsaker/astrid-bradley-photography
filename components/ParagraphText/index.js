import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ParagraphText = ({ children }) => {
  return (
    <span>
      <p>{children}</p>

      <style jsx>{styles}</style>
    </span>
  );
};

ParagraphText.propTypes = {
  children: PropTypes.string,
};
ParagraphText.defaultProps = {};

export default ParagraphText;
