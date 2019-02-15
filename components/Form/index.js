import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Input from './Input';
import Button from '../Button';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    formName: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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

      // IF its a number input
      // THEN parse the number string into an int
      if (type === 'number') {
        inputValue = Number(value);
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
          const { name } = field;

          return <Input key={name} {...field} onChange={onChange} />;
        })}

        {children}

        <Button type="submit" text={submitText} />

        <style jsx>{styles}</style>
      </form>
    );
  }
}
