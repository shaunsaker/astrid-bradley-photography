import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Card from '../Card';

const Button = ({ text, type, action }) => {
  const delegatorAction =
    action || type === 'submit'
      ? {
          button: {
            ...action,
            type,
          },
        }
      : undefined;

  return (
    <Card action={delegatorAction} secondary>
      <p className="text">{text}</p>

      <style jsx>{styles}</style>
    </Card>
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
