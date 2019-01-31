import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Icon from '../Icon';
import ParagraphText from '../ParagraphText';

const Snackbar = ({ text }) => {
  return (
    <div className="wrapper shadow-lg">
      <div className="container row">
        <Icon name="info" color={colors.white} />

        <div className="spacer-hz" />

        <ParagraphText className="text">{text}</ParagraphText>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Snackbar.propTypes = {
  text: PropTypes.string,
};
Snackbar.defaultProps = {};

export default Snackbar;
