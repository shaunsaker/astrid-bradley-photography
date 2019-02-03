import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';

import { shootFormFields } from '../../config';

import Layout from '../../components/Layout';
import Form from '../../components/Form';

import withAuth from '../../wrappers/withAuth';

export class AddShoot extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.saveShoot = this.saveShoot.bind(this);
    this.goBack = this.goBack.bind(this);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;

    // IF the app is not loading
    // IF the app was loading
    if (!isLoading && prevProps.isLoading) {
      this.goBack();
    }
  }

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

  goBack() {
    Router.back();
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

const mapStateToProps = (state) => {
  const { appState } = state;
  const { pendingTransactions } = appState;
  const isLoading = pendingTransactions.length ? true : false;

  return {
    isLoading,
  };
};

export default withAuth(connect(mapStateToProps)(AddShoot));
