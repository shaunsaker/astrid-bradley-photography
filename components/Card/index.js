import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import LinkDelegator from '../LinkDelegator';

const Card = ({ action, secondary, style, children }) => {
  return (
    <LinkDelegator action={action}>
      <div
        className={`container relative ${action ? 'shadow-sm shadow-hover clickable' : ''} ${
          secondary ? 'secondary' : ''
        }`}
        style={style}
      >
        {children}

        <style jsx>{styles}</style>
      </div>
    </LinkDelegator>
  );
};

Card.propTypes = {
  action: PropTypes.shape({}),
  secondary: PropTypes.bool,
  style: PropTypes.shape({}),
  children: PropTypes.node,
};
Card.defaultProps = {};

export default Card;
