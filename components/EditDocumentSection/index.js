import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { forms } from '../../config';

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
      const value = document[name];
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
