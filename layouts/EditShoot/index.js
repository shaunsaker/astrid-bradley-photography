import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { shootFormFields } from '../../config';
import { getFormDate } from '../../utils';
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
    this.setValue = this.setValue.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);

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

  onArchive() {}

  onUnarchive() {}

  setValue(name, value) {
    const { values } = this.state;
    values[name] = value;

    this.setState({ values });
  }

  render() {
    const { values } = this.state;
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const { name, id, is_archived } = shoot;

    // Create the controls
    const controls = [
      {
        iconName: 'photo',
        label: 'Upload Photos',
        link: {
          href: `/admin/upload-photos?id=${id}`,
        },
      },
      {
        iconName: is_archived ? 'unarchive' : 'archive',
        label: is_archived ? 'Unarchive' : 'Archive',
        handleClick: is_archived ? this.onUnarchive : this.onArchive,
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
      <Layout title={name}>
        <section className="relative">
          <Form name="edit-shoot" fields={fieldsWithValues} handleChange={this.onChange} />

          <div>Loading state</div>
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
