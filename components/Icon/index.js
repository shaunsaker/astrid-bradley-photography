import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ICONS from './icons';

const IconC = ({ name, size, color }) => {
  let iconComponent;

  if (name) {
    const Icon = ICONS[name];
    iconComponent = <Icon size={size} color={color} />;
  }

  return (
    <Fragment>
      {iconComponent}

      <style jsx>{styles}</style>
    </Fragment>
  );
};

IconC.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
IconC.defaultProps = {
  size: 24,
  color: '#000000',
};

export default IconC;
