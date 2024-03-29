import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';

import withSaveDocument from '../../enhancers/withSaveDocument';

export class EditDocumentSection extends React.Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getDocumentURL = this.getDocumentURL.bind(this);

    this.state = {
      values: this.getInitialState(),
    };
  }

  static propTypes = {
    // Parent
    form: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    document: PropTypes.shape({}),
    collectionURL: PropTypes.string.isRequired,

    // withSaveDocument
    onSaveDocument: PropTypes.func,
  };

  static defaultProps = {};

  getInitialState() {
    const { form, document } = this.props;

    // IF there's a document
    // It means we're editing
    if (document) {
      const values = {};

      // Use the form fields to generate the values object
      // Use the values from the document
      form.forEach((field) => {
        const { type, name } = field;

        if (type === 'group') {
          const valuesArray = document[name];
          values[name] = {};

          valuesArray.forEach((item) => {
            const key = Object.keys(item)[0];
            const value = item[key];
            values[name][key] = value;
          });
        } else {
          const value = document[name];
          values[name] = value;
        }
      });
      return values;
    }

    // ELSE it means we're creating
    return null;
  }

  onChange(name, value, groupName) {
    if (groupName) {
      const { values } = this.state;
      const groupValues = values[groupName];
      groupValues[name] = value;

      this.setValue(groupName, groupValues);
    } else {
      this.setValue(name, value);
    }
  }

  onSubmit(values) {
    const { document, onSaveDocument } = this.props;

    // Keep the existing values but overwrite if edited
    const newDocument = {
      ...document,
      ...values,
    };

    const documentURL = this.getDocumentURL(values);

    onSaveDocument(newDocument, documentURL);
  }

  setValue(name, value) {
    const { values } = this.state;
    values[name] = value;

    this.setState({ values });
  }

  getDocumentURL(values) {
    const { document, collectionURL } = this.props;

    let id;

    // IF there's a document
    // It means we're editing
    if (document) {
      id = document.id; // eslint-disable-line
    } else {
      // ELSE it means we're creating
      // Use the name as the document id
      const { name } = values;

      id = name
        .split(' ')
        .join('-')
        .toLowerCase();
    }

    const url = `${collectionURL}/${id}`;

    return url;
  }

  render() {
    const { values } = this.state;
    const { document, form } = this.props;
    let fields;
    let name;

    // IF there's a document
    // It means we're editing
    if (document) {
      name = 'edit-form';

      // Append the relevant value to each field
      fields = form.map((field) => {
        const { type } = field;
        let newField;

        if (type === 'group') {
          const newFields = field.fields.map((item) => {
            const groupValues = values[field.name];
            const value = groupValues && groupValues[item.name];

            return {
              ...item,
              value,
            };
          });

          newField = {
            ...field,
            fields: newFields,
          };
        } else {
          const value = values[field.name];
          newField = {
            ...field,
            value,
          };
        }

        return newField;
      });
    } else {
      // ELSE it means we're creating
      // Just use the form as is
      name = 'add-form';
      fields = form;
    }

    return (
      <section>
        <Form
          name={name}
          fields={fields}
          handleChange={document ? this.onChange : null}
          handleSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

export default withSaveDocument(EditDocumentSection);
