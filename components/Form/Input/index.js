import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import HeadingText from '../../HeadingText';
import Label from './Label';
import Select from '../Select';

const Input = ({
  type,
  options,
  name,
  value,
  label,
  headerText,
  isRequired,
  multiple,
  accept,
  onChange,
}) => {
  const inputComponent =
    type === 'select' ? (
      <Select fieldName={name} id={name} options={options} value={value} handleChange={onChange} />
    ) : type === 'textarea' ? (
      <textarea name={name} id={name} value={value} required={isRequired} onChange={onChange} />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        checked={type === 'checkbox' ? value : null}
        required={isRequired}
        multiple={multiple}
        accept={accept}
        onChange={onChange}
      />
    );

  // FIXME: Would be better to pass this in (not very dynamic)
  const headerTextComponent = headerText && (
    <Fragment>
      <HeadingText>{headerText}</HeadingText> <div className="spacer-vt large" />
    </Fragment>
  );

  return (
    <Fragment>
      {headerTextComponent}

      <fieldset className="relative">
        <Label type={type} name={name} label={label}>
          {inputComponent}
        </Label>
      </fieldset>
    </Fragment>
  );
};

Input.propTypes = {
  type: PropTypes.string, // text, number, email, password, textarea, file, checkbox, select etc
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  label: PropTypes.string,
  headerText: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})), // if type === 'select'
  multiple: PropTypes.bool, // if type === 'file'
  accept: PropTypes.string, // if type === 'file'
  onChange: PropTypes.func,
};
Input.defaultProps = {};

export default Input;
