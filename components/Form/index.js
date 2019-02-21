import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Label from './Label';
import Input from './Input';
import Button from '../Button';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  static propTypes = {
    formName: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.shape({})), // if type === 'group'
      }),
    ).isRequired,
    submitText: PropTypes.string,
    submitDisabled: PropTypes.bool,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func, // if not supplied, assume it is a netlify form
    children: PropTypes.node, // children to render before the submit button
  };

  static defaultProps = {
    submitText: 'Submit',
  };

  onChange(event, groupName) {
    const { handleChange } = this.props;
    const input = event.target;
    const { name } = input;
    const inputValue = this.getInputValue(input);

    handleChange(name, inputValue, groupName);
  }

  onSubmit(event) {
    const { fields, handleSubmit } = this.props;
    const values = {};

    // Prevent default submit behaviour
    event.preventDefault();

    // Grab the relevant fields from event.target
    fields.forEach((field) => {
      const { name } = field;

      if (field.type === 'group') {
        const fieldset = event.target[name];

        // Find the fields inputs
        const inputsCollection = fieldset.getElementsByTagName('input');

        // Convert the html collection into an array
        const inputsArray = Array.from(inputsCollection);

        // Add as array of objects to values
        values[name] = inputsArray.map((input) => {
          const value = {};
          value[input.name] = this.getInputValue(input);

          return value;
        });
      } else {
        const input = event.target[name];

        values[name] = this.getInputValue(input);
      }
    });

    handleSubmit(values);
  }

  getInputValue(input) {
    const { value, type, checked } = input;

    if (type === 'number') {
      return Number(value);
    }

    if (type === 'checkbox') {
      return checked;
    }

    return value;
  }

  render() {
    const {
      formName,
      fields,
      submitText,
      submitDisabled,
      handleChange,
      handleSubmit,
      children,
    } = this.props;
    const onChange = handleChange && this.onChange;

    return (
      <form
        name={formName}
        onSubmit={handleSubmit && this.onSubmit}
        method={!handleSubmit ? 'POST' : 'false'}
        data-netlify={!handleSubmit && 'true'}
      >
        {fields.map((field) => {
          const { type, name } = field;

          if (type === 'group') {
            return (
              <fieldset key={name} name={name}>
                <Label {...field}>
                  {field.fields.map((item) => {
                    return (
                      <Input
                        key={item.name}
                        {...item}
                        onChange={(event) => (onChange ? onChange(event, name) : null)}
                      />
                    );
                  })}
                </Label>
              </fieldset>
            );
          }

          return <Input key={name} {...field} onChange={onChange} />;
        })}

        {children}

        <Button type="submit" text={submitText} disabled={submitDisabled} />

        <style jsx>{styles}</style>
      </form>
    );
  }
}
