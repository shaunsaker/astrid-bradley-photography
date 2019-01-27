import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Icon from '../Icon';

const Snackbar = ({ text, handleClose }) => {
  return (
    <div className="wrapper shadow-lg">
      <div className="container row">
        <Icon name="info" color={colors.accent2} />

        <div className="spacer-hz" />

        <p className="text">{text}</p>

        <button type="button" onClick={handleClose} className="close-button">
          <Icon name="close" color={colors.white} />
        </button>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

Snackbar.propTypes = {
  text: PropTypes.string,
  handleClose: PropTypes.func,
};
Snackbar.defaultProps = {};

export default Snackbar;
