import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import SmallText from '../SmallText';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <SmallText>
        All content copyright Astrid Bradley © 2012-{year}. All rights reserved.
      </SmallText>

      <style jsx>{styles}</style>
    </div>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
