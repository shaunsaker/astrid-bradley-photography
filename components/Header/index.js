import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => {
  return (
    <Media query={{ maxWidth: 720 }}>{(matches) => (!matches ? <Desktop /> : <Mobile />)}</Media>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
