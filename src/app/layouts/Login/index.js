import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';

import Layout from '../../components/Layout';
import LoginFormSection from './LoginFormSection';
import LoadingSection from '../../components/LoadingSection';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.signInUser = this.signInUser.bind(this);
    this.setSystemMessage = this.setSystemMessage.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  static getInitialProps = async () => {};

  static propTypes = {
    dispatch: PropTypes.func,
    authenticated: PropTypes.bool,
    systemMessage: PropTypes.shape({ message: PropTypes.string }),
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { authenticated, systemMessage } = this.props;

    if (systemMessage.message !== prevProps.systemMessage.message) {
      // Error event
      this.setIsLoading(false);
    }

    if (authenticated !== prevProps.authenticated) {
      // New user is signed in
      // Set a system message telling the user that they are signed in
      // Redirect to admin dashboard
      this.setSystemMessage('Sign in successful.');

      Router.replace('/admin');
    }
  }

  onSubmit(values) {
    this.setIsLoading(true);
    this.signInUser(values);
  }

  setIsLoading(isLoading) {
    this.setState({
      isLoading,
    });
  }

  signInUser(payload) {
    const { dispatch } = this.props;

    dispatch({
      type: 'signInWithEmail',
      payload,
      meta: {
        nextAction: {
          type: 'SIGN_IN_USER',
        },
      },
    });
  }

  setSystemMessage(message) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_SYSTEM_MESSAGE',
      payload: { message, isSuccess: true },
    });
  }

  render() {
    const { isLoading } = this.state;
    const loadingComponent = isLoading && <LoadingSection />;

    return (
      <Layout title="Login">
        <LoginFormSection handleSubmit={this.onSubmit} />

        {loadingComponent}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, appState } = state;
  const { uid } = user;
  const authenticated = uid ? true : false;
  const { systemMessage } = appState;

  return {
    authenticated,
    systemMessage,
  };
};

export default connect(mapStateToProps)(Login);
