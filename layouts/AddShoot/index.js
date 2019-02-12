import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { shootFormFields } from '../../config';

import Layout from '../../components/Layout';
import Form from '../../components/Form';

import withAuth from '../../wrappers/withAuth';
import withSaveShoot from '../../wrappers/withSaveShoot';

export class AddShoot extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  static propTypes = {
    isLoading: PropTypes.bool,
    onSaveShoot: PropTypes.func,
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;

    // IF the app is not loading
    // IF the app was loading
    if (!isLoading && prevProps.isLoading) {
      // TODO:
    }
  }

  onSubmit(values) {
    const shoot = values;
    const { onSaveShoot } = this.props;

    // Replace the date value with js time (in ms)
    const time = new Date(shoot.date).getTime();
    shoot.date = time;

    // Use the name as the id
    const id = shoot.name
      .split(' ')
      .join('-')
      .toLowerCase();

    onSaveShoot(shoot, id);
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

export default withAuth(withSaveShoot(connect(mapStateToProps)(AddShoot)));
