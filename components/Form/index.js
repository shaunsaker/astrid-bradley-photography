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
        const { type, name, label, isRequired } = field;
        const inputComponent =
          type === 'textarea' ? (
            <textarea name={name} id={`input-${name}`} required={isRequired} />
          ) : (
            <input type={type} name={name} id={`input-${name}`} required={isRequired} />
          );

        return (
          <fieldset key={name}>
            {inputComponent}

            <label htmlFor={`input-${name}`}>{label}</label>
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
