import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Card from '../Card';

const Button = ({ text, type, disabled, action }) => {
  const delegatorAction =
    action || type === 'submit'
      ? {
          button: {
            ...action,
            type,
            disabled,
          },
        }
      : undefined;
  const disabledStyles = disabled ? { opacity: 0.3 } : null;

  return (
    <Card action={delegatorAction} secondary shadow style={disabledStyles}>
      <p className="text">{text}</p>

      <style jsx>{styles}</style>
    </Card>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  action: PropTypes.shape({}),
};
Button.defaultProps = {
  type: 'button',
};

export default Button;
