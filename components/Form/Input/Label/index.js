import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const STATIC_LABELS = ['group'];
const INLINE_LEFT_LABELS = ['select'];
const INLINE_RIGHT_LABELS = ['checkbox'];

const Label = ({ type, name, label, children }) => {
  const isStaticLabel = STATIC_LABELS.includes(type);
  const isInlineLeftLabel = INLINE_LEFT_LABELS.includes(type);
  const isInlineRightLabel = INLINE_RIGHT_LABELS.includes(type);
  let labelBeforeComponent;
  let labelAfterComponent;
  let className;

  if (isStaticLabel || isInlineLeftLabel) {
    className = isStaticLabel ? 'static' : 'inline-left';
    labelBeforeComponent = (
      <label htmlFor={name} className={className}>
        {label}
      </label>
    );
  } else {
    className = isInlineRightLabel ? 'inline-right' : 'absolute';
    labelAfterComponent = (
      <label htmlFor={name} className={className}>
        {label}
      </label>
    );
  }

  return (
    <Fragment>
      {labelBeforeComponent}

      {children}

      {labelAfterComponent}
    </Fragment>
  );
};

Label.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};
Label.defaultProps = {};

export default Label;
