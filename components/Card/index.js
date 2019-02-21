import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import LinkDelegator from '../LinkDelegator';

const Card = ({ action, secondary, containerStyle, style, children }) => {
  return (
    <LinkDelegator action={action} style={containerStyle}>
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
  containerStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
  children: PropTypes.node,
};
Card.defaultProps = {};

export default Card;
