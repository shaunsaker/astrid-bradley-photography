import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Logo = () => {
  return (
    <Fragment>
      <img src="/static/images/logo.svg" alt="Astrid Bradley Photography logo" />

      <style jsx>{styles}</style>
    </Fragment>
  );
};

Logo.propTypes = {};
Logo.defaultProps = {};

export default Logo;
