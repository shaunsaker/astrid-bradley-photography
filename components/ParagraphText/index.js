import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ParagraphText = ({ children, className }) => {
  return (
    <Fragment>
      <p className={className}>{children}</p>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

ParagraphText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
ParagraphText.defaultProps = {};

export default ParagraphText;
