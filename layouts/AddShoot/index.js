import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { shootFormFields } from '../../config';

import Layout from '../../components/Layout';
import Form from '../../components/Form';

import withAuth from '../../wrappers/withAuth';

export class AddShoot extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.saveShoot = this.saveShoot.bind(this);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onSubmit(values) {
    const shoot = values;

    // Replace the date value with js time (in ms)
    const time = new Date(shoot.date).getTime();
    shoot.date = time;

    // Use the name as the id
    const id = shoot.name
      .split(' ')
      .join('-')
      .toLowerCase();

    this.saveShoot(id, shoot);
  }

  saveShoot(id, shoot) {
    const { dispatch } = this.props;
    const document = shoot;

    // Add a date created field with the current time
    document.date_created = Date.now();

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
            message: 'Shoot added successfully.',
          },
        },
      },
    });
  }

  render() {
    const title = 'Add a Shoot';

    return (
      <Layout title={title}>
        <section className="relative">
          <Form formName="add-shoot" fields={shootFormFields} handleSubmit={this.onSubmit} />
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default withAuth(connect(mapStateToProps)(AddShoot));
