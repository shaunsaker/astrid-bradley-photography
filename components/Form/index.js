import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Select from '../Select';
import Button from '../Button';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    formName: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string, // text, password, textarea etc
        name: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any, // eslint-disable-line
        checked: PropTypes.bool,
        isRequired: PropTypes.bool,
        multiple: PropTypes.bool, // if type === 'file'
        accept: PropTypes.string, // if type === 'file'
      }),
    ).isRequired,
    submitText: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func, // if not supplied, assume it is a netlify form
    children: PropTypes.node, // children to render before the submit button
  };

  static defaultProps = {
    submitText: 'Submit',
  };

  onChange(event) {
    const { handleChange } = this.props;
    const { target } = event;
    const { name, value, type, checked } = target;
    let inputValue = value;

    // IF its a checkbox
    // THEN Assign the checked value to the inputValue
    if (type === 'checkbox') {
      inputValue = checked;
    }

    handleChange(name, inputValue);
  }

  onSubmit(event) {
    const { fields, handleSubmit } = this.props;
    const values = {};

    // Prevent default submit behaviour
    event.preventDefault();

    // Grab the relevant fields from event.target
    fields.forEach((field) => {
      const { name } = field;
      const { value, type, checked } = event.target[name];
      let inputValue = value;

      // IF its a checkbox
      // THEN Assign the checked value to the inputValue
      if (type === 'checkbox') {
        inputValue = checked;
      }

      values[name] = inputValue;
    });

    handleSubmit(values);
  }

  render() {
    const { formName, fields, submitText, handleChange, handleSubmit, children } = this.props;
    const onChange = handleChange && this.onChange;

    return (
      <form
        name={formName}
        onSubmit={handleSubmit && this.onSubmit}
        method={!handleSubmit ? 'POST' : 'false'}
        data-netlify={!handleSubmit && 'true'}
      >
        {fields.map((field) => {
          const { type, options, name, label, value, isRequired, multiple, accept } = field;
          const id = `input-${name}`;
          const inputComponent =
            type === 'select' ? (
              <Select
                fieldName={name}
                id={id}
                options={options}
                value={value}
                handleChange={onChange}
              />
            ) : type === 'textarea' ? (
              <textarea name={name} id={id} value={value} required={isRequired} />
            ) : (
              <input
                type={type}
                name={name}
                id={id}
                value={value || ''}
                checked={type === 'checkbox' ? value : null}
                required={isRequired}
                multiple={multiple}
                accept={accept}
                onChange={onChange}
              />
            );

          let staticLabelComponent;
          let absoluteLabelComponent;

          // IF a label was provided
          if (label) {
            // IF the input is of type select or checkbox
            const isOtherLabel = type === 'select' || type === 'checkbox';

            if (isOtherLabel) {
              staticLabelComponent = (
                <label htmlFor={id} className="static-label">
                  {label}
                </label>
              );
            } else {
              absoluteLabelComponent = <label htmlFor={id}>{label}</label>;
            }
          }

          return (
            <fieldset key={name}>
              {staticLabelComponent}

              {inputComponent}

              {absoluteLabelComponent}
            </fieldset>
          );
        })}

        {children}

        <Button type="submit" text={submitText} />

        <style jsx>{styles}</style>
      </form>
    );
  }
}
