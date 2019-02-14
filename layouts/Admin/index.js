import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.onSignOut = this.onSignOut.bind(this);
    this.signOut = this.signOut.bind(this);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onSignOut() {
    this.signOut();
  }

  signOut() {
    const { dispatch } = this.props;

    dispatch({
      type: 'signOut',
      meta: {
        nextAction: {
          type: 'SIGN_OUT_USER',
          // TODO: How to also display error message?
        },
      },
    });
  }

  render() {
    return (
      <Layout title="Admin Dashboard">
        <section />

        <ControlPanel
          controls={[{ iconName: 'lock', label: 'Sign Out', handleClick: this.signOut }]}
        />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default withAuth(connect(mapStateToProps)(Admin));
