import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import SmallText from '../../SmallText';

const Tooltip = ({ text }) => {
  return (
    <div className="container shadow-lg">
      <SmallText className="text">{text}</SmallText>

      <style jsx>{styles}</style>
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string,
};
Tooltip.defaultProps = {};

export default Tooltip;
