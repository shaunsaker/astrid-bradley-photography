import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <p>All content copyright Astrid Bradley © 2012-{year}. All rights reserved.</p>

      <style jsx>{styles}</style>
    </div>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
