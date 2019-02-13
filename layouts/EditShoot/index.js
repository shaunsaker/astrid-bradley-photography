import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { shootForm } from '../../config/forms';
import { cloneObject, getFormDate } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import Form from '../../components/Form';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';
import withSaveShoot from '../../wrappers/withSaveShoot';

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
    shoots: PropTypes.arrayOf(PropTypes.shape({})),
    shootID: PropTypes.string,
    onSaveShoot: PropTypes.func,
  };

  static defaultProps = {};

  getInitialState() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const values = {};

    // Use the form fields to generate the values object
    // Use the values from the shoot
    shootForm.forEach((field) => {
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
    const { shootID, shoots, onSaveShoot } = this.props;

    // Clone values otherwise we mutate the state
    const newValues = cloneObject(values);

    // Replace the date value with js time (in ms)
    const time = new Date(newValues.date).getTime();
    newValues.date = time;

    const existingShoot = shoots.filter((item) => item.id === shootID)[0];

    // Keep the existing values but overwrite if edited
    const shoot = {
      ...existingShoot,
      ...newValues,
    };

    onSaveShoot(shoot, shootID);
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
        label: 'Manage Photos',
        link: {
          href: `/admin/manage-photos?id=${id}`,
        },
      },
    ];

    // Append the relevant value to each field
    const fieldsWithValues = shootForm.map((field) => {
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

export default withAuth(withSaveShoot(connect(mapStateToProps)(EditShoot)));
