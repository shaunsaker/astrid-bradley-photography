import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import Select from '../Select';

const Input = ({
  type,
  options,
  name,
  value,
  label,
  isRequired,
  multiple,
  accept,
  fields,
  onChange,
}) => {
  const inputComponent =
    type === 'select' ? (
      <Select fieldName={name} id={name} options={options} value={value} handleChange={onChange} />
    ) : type === 'group' ? (
      <fieldset name={name} className="group">
        {fields.map((item) => {
          return <Input key={item.name} {...item} onChange={onChange} />;
        })}
      </fieldset>
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

  return (
    <fieldset key={name}>
      <Label type={type} name={name} label={label}>
        {inputComponent}
      </Label>
    </fieldset>
  );
};

Input.propTypes = {
  type: PropTypes.string, // text, number, email, password, textarea, file, checkbox, select, group etc
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})), // if type === 'select'
  multiple: PropTypes.bool, // if type === 'file'
  accept: PropTypes.string, // if type === 'file'
  fields: PropTypes.arrayOf(PropTypes.shape({})), // if type === 'group'
  onChange: PropTypes.func,
};
Input.defaultProps = {};

export default Input;
