import React from 'react';
import PropTypes from 'prop-types';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => {
  return (
    <div>
      <Desktop />

      <Mobile />
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
