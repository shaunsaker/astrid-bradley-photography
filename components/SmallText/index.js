import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const SmallText = ({ children }) => {
  return (
    <Fragment>
      <small>{children}</small>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

SmallText.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};
SmallText.defaultProps = {};

export default SmallText;
