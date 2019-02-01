import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { shootFormFields } from '../../config';
import { cloneObject, getFormDate } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import Form from '../../components/Form';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';

export class EditShoot extends React.Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
    this.saveShoot = this.saveShoot.bind(this);

    this.state = {
      values: this.getInitialState(),
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    shoots: PropTypes.arrayOf(PropTypes.shape({})),
    shootID: PropTypes.string,
  };

  static defaultProps = {};

  getInitialState() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const values = {};

    // Use the form fields to generate the values object
    // Use the values from the shoot
    shootFormFields.forEach((field) => {
      const { name } = field;
      let value = shoot[name];

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
    const { shootID } = this.props;

    // Clone values otherwise we mutate the state
    const newValues = cloneObject(values);

    // Replace the date value with js time (in ms)
    const time = new Date(newValues.date).getTime();
    newValues.date = time;

    // Keep the original shoot ID (otherwise we create a new document)
    const id = shootID;

    this.saveShoot(id, newValues);
  }

  saveShoot(id, shoot) {
    const { dispatch, shoots, shootID } = this.props;
    const existingShoot = shoots.filter((item) => item.id === shootID)[0];
    const document = {
      ...existingShoot,
      ...shoot,
    };

    // Add a date_modified field with the current time
    document.date_modified = Date.now();

    dispatch({
      type: 'setDocument',
      payload: {
        document,
      },
      meta: {
        url: `shoots/${id}`,
        nextAction: {
          type: 'SET_SYSTEM_MESSAGE',
          payload: {
            message: 'Shoot edited successfully.',
          },
        },
      },
    });
  }

  setValue(name, value) {
    const { values } = this.state;
    values[name] = value;

    this.setState({ values });
  }

  render() {
    const { values } = this.state;
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const { name, id } = shoot;
    const title = `Editing: ${name}`;

    // Create the controls (needs to be dynamic)
    const controls = [
      {
        iconName: 'photo',
        label: 'Upload Photos',
        link: {
          href: `/admin/upload-photos?id=${id}`,
        },
      },
    ];

    // Append the relevant value to each field
    const fieldsWithValues = shootFormFields.map((field) => {
      const value = values[field.name];

      return {
        ...field,
        value,
      };
    });

    return (
      <Layout title={title}>
        <section className="relative">
          <Form
            name="edit-shoot"
            fields={fieldsWithValues}
            handleChange={this.onChange}
            handleSubmit={this.onSubmit}
          />
        </section>

        <ControlPanel controls={controls} />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withAuth(connect(mapStateToProps)(EditShoot));
