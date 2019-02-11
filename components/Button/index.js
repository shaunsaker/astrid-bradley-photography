import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import LinkDelegator from '../LinkDelegator';

const Button = ({ text, type, action }) => {
  const delegatorAction = {
    button: {
      ...action,
      type,
    },
  };

  return (
    <LinkDelegator action={delegatorAction}>
      <div className="button shadow-sm shadow-hover">{text}</div>

      <style jsx>{styles}</style>
    </LinkDelegator>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.shape({}),
};
Button.defaultProps = {
  type: 'button',
};

export default Button;
