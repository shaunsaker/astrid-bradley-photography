import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Links from '../../Links';
import Icon from '../../../Icon';

const Menu = ({ handleClose }) => {
  return (
    <ul className="shadow-lg">
      <button type="button" onClick={handleClose} className="button">
        <Icon name="close" />
      </button>

      <div className="spacer-vt" />

      <Links />

      <style jsx>{styles}</style>
    </ul>
  );
};

Menu.propTypes = {
  handleClose: PropTypes.func,
};
Menu.defaultProps = {};

export default Menu;
