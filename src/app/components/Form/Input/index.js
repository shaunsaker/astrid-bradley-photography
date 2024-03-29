import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import Select from '../Select';

const Input = ({ type, options, name, value, label, isRequired, multiple, accept, onChange }) => {
  const inputValue = onChange && (value || (!value && (type === 'number' ? 0 : '')));
  const checked = type === 'checkbox' ? (value ? true : false) : null;

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
        value={inputValue}
        checked={checked}
        required={isRequired}
        multiple={multiple}
        accept={accept}
        onChange={onChange}
      />
    );

  return (
    <Fragment>
      <fieldset className="relative">
        <Label type={type} name={name} label={label}>
          {inputComponent}
        </Label>
      </fieldset>
    </Fragment>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'password',
    'date',
    'tel',
    'textarea',
    'file',
    'checkbox',
    'select',
  ]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})), // if type === 'select'
  multiple: PropTypes.bool, // if type === 'file'
  accept: PropTypes.string, // if type === 'file'
  onChange: PropTypes.func,
};
Input.defaultProps = {};

export default Input;
