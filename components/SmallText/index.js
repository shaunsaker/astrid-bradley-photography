import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const SmallText = ({ children }) => {
  return (
    <span>
      <small>{children}</small>

      <style jsx>{styles}</style>
    </span>
  );
};

SmallText.propTypes = {
  children: PropTypes.string,
};
SmallText.defaultProps = {};

export default SmallText;
