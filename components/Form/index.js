import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Form = ({ formName, fields, submitText, handleSubmit }) => {
  return (
    <form
      name={formName}
      onSubmit={handleSubmit}
      method={!handleSubmit ? 'POST' : 'false'}
      data-netlify={!handleSubmit && 'true'}
    >
      {fields.map((field) => {
        const { type, options, name, label, isRequired } = field;
        const id = `input-${name}`;
        const inputComponent =
          type === 'select' ? (
            <select name={name} id={id} required={isRequired}>
              {options.map((option) => {
                return <option key={option.value}>{option.name}</option>;
              })}
            </select>
          ) : type === 'textarea' ? (
            <textarea name={name} id={id} required={isRequired} />
          ) : (
            <input type={type} name={name} id={id} required={isRequired} />
          );
        const selectLabelComponent = field.type === 'select' && (
          <label htmlFor={id} className="select-label">
            {label}
          </label>
        );
        const labelComponent = field.type !== 'select' && <label htmlFor={id}>{label}</label>;

        return (
          <fieldset key={name}>
            {selectLabelComponent}

            {inputComponent}

            {labelComponent}
          </fieldset>
        );
      })}

      <button type="submit" className="button shadow-sm shadow-hover">
        {submitText}
      </button>

      <style jsx>{styles}</style>
    </form>
  );
};

Form.propTypes = {
  formName: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string, // text, password, textarea etc
      name: PropTypes.string,
      label: PropTypes.string,
      isRequired: PropTypes.bool,
    }),
  ).isRequired,
  submitText: PropTypes.string,
  handleSubmit: PropTypes.func, // if not supplied, assume it is a netlify form
};
Form.defaultProps = {
  submitText: 'Submit',
};

export default Form;