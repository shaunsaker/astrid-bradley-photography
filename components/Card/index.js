import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import LinkDelegator from '../LinkDelegator';

const Card = ({ action, children }) => {
  return (
    <LinkDelegator action={action}>
      <div className={`container ${action ? 'shadow-sm shadow-hover clickable' : ''}`}>
        {children}

        <style jsx>{styles}</style>
      </div>
    </LinkDelegator>
  );
};

Card.propTypes = {
  action: PropTypes.shape({}),
  children: PropTypes.node,
};
Card.defaultProps = {};

export default Card;
