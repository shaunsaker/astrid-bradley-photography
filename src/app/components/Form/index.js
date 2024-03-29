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
    isSubmitDisabled: PropTypes.bool,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
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
          const inputValue = this.getInputValue(input);

          // FIXME: Apply to else block as well
          if (inputValue) {
            value[input.name] = inputValue;
          }

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
      isSubmitDisabled,
      handleChange,
      handleSubmit,
    } = this.props;
    const onChange = handleChange && this.onChange;

    return (
      <form name={formName} onSubmit={this.onSubmit} method={!handleSubmit ? 'POST' : 'false'}>
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

        <Button type="submit" text={submitText} disabled={isSubmitDisabled} />

        <style jsx>{styles}</style>
      </form>
    );
  }
}
