import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { forms } from '../../config';
import { cloneObject, getFormDate } from '../../utils';

import Form from '../Form';

import withSaveDocument from '../../wrappers/withSaveDocument';

export class EditShoot extends React.Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);

    this.state = {
      values: this.getInitialState(),
    };
  }

  static propTypes = {
    // Parent
    formName: PropTypes.string,
    document: PropTypes.shape({}),
    collectionURL: PropTypes.string,

    // withSaveDocument
    onSaveDocument: PropTypes.func,
  };

  static defaultProps = {};

  getInitialState() {
    const { formName, document } = this.props;
    const form = forms[formName];
    const values = {};

    // Use the form fields to generate the values object
    // Use the values from the shoot
    form.forEach((field) => {
      const { name } = field;
      let value = document[name] || false;

      // IF its the date field
      // THEN convert the js time in ms to a form date
      if (name === 'date') {
        value = getFormDate(value);
      }
      values[name] = value;
    });
    return values;
  }

  onChange(name, value) {
    this.setValue(name, value);
  }

  onSubmit() {
    const { values } = this.state;
    const { document, collectionURL, onSaveDocument } = this.props;

    // Clone values otherwise we mutate the state
    const newValues = cloneObject(values);

    // Replace the date value with js time (in ms)
    // TODO: Only if the date is a form date
    const time = new Date(newValues.date).getTime();
    newValues.date = time;

    // Keep the existing values but overwrite if edited
    const newDocument = {
      ...document,
      ...values,
    };

    // Use the name as the id
    const id = document.name
      .split(' ')
      .join('-')
      .toLowerCase();

    const url = `${collectionURL}/${id}`;

    onSaveDocument(newDocument, url);
  }

  setValue(name, value) {
    const { values } = this.state;
    values[name] = value;

    this.setState({ values });
  }

  render() {
    const { values } = this.state;
    const { formName } = this.props;
    const form = forms[formName];

    // Append the relevant value to each field
    const fieldsWithValues = form.map((field) => {
      const value = values[field.name];

      return {
        ...field,
        value,
      };
    });

    return (
      <section>
        <Form
          name={formName}
          fields={fieldsWithValues}
          handleChange={this.onChange}
          handleSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default withSaveDocument(connect(mapStateToProps)(EditShoot));
