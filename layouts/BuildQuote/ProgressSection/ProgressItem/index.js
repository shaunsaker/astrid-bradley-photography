import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import ParagraphText from '../../../../components/ParagraphText';
import SmallText from '../../../../components/SmallText';

const ProgressItem = ({ number, text }) => {
  return (
    <div className="container row">
      <div className="circle flex-center">
        <SmallText white>{number}</SmallText>
      </div>

      <ParagraphText>{text}</ParagraphText>

      <style jsx>{styles}</style>
    </div>
  );
};

ProgressItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};
ProgressItem.defaultProps = {};

export default ProgressItem;
