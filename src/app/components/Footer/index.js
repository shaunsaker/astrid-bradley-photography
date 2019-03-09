import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import SmallText from '../SmallText';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const string = ` All content copyright Astrid Bradley © 2012-${year}. All rights reserved.`;

  return (
    <div>
      <SmallText>{string}</SmallText>

      <style jsx>{styles}</style>
    </div>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
