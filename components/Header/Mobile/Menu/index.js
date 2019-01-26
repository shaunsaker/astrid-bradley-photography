import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Links from '../../Links';

const Menu = () => {
  return (
    <ul className="shadow-lg">
      <Links />

      <style jsx>{styles}</style>
    </ul>
  );
};

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;
