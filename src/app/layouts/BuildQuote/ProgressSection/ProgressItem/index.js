import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../../../static/styles/styleConstants';
import styles from './styles';

import ParagraphText from '../../../../components/ParagraphText';
import SmallText from '../../../../components/SmallText';
import Icon from '../../../../components/Icon';

const ProgressItem = ({ number, text, isChecked }) => {
  const iconComponent = isChecked ? (
    <div className="icon-container">
      <Icon name="check-circle" color={colors.green} />

      <style jsx>{styles}</style>
    </div>
  ) : (
    <div className="circle flex-center">
      <SmallText white>{number}</SmallText>

      <style jsx>{styles}</style>
    </div>
  );

  return (
    <div className="container row">
      {iconComponent}

      <ParagraphText>{text}</ParagraphText>

      <style jsx>{styles}</style>
    </div>
  );
};

ProgressItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  isChecked: PropTypes.bool,
};
ProgressItem.defaultProps = {};

export default ProgressItem;
