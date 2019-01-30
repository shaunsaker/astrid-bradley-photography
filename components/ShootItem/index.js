import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ShootItem = ({ shoot }) => {
  return (
    <div className="container">
      <style jsx>{styles}</style>
    </div>
  );
};

ShootItem.propTypes = {
  shoot: PropTypes.shape({}),
};
ShootItem.defaultProps = {};

export default ShootItem;
