import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Logo from '../../Logo';
import Links from '../Links';

const Desktop = () => {
  return (
    <div className="desktop">
      <Logo />

      <ul className="row">
        <Links />
      </ul>

      <style jsx>{styles}</style>
    </div>
  );
};

Desktop.propTypes = {};
Desktop.defaultProps = {};

export default Desktop;
