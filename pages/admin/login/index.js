import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import LoginFormSection from '../../../layouts/LoginFormSection';
import LoadingSection from '../../../layouts/LoadingSection';

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
    user: PropTypes.shape({
      uid: PropTypes.string,
    }),
    systemMessage: PropTypes.string,
  };

  static defaultProps = {};

  componentDidUpdate(prevProps) {
    const { user, systemMessage } = this.props;
    const { uid } = user;

    if (systemMessage !== prevProps.systemMessage) {
      // Error event
      this.setIsLoading(false);
    }

    if (uid !== prevProps.user.uid) {
      // New user is signed in
      // Set a system message telling the user that they are signed in
      // Redirect to admin dashboard
      this.setSystemMessage('Sign in successful.');

      Router.replace('/admin');
    }
  }

  onSubmit(event) {
    const { email, password } = event.target;
    const values = {
      email: email.value,
      password: password.value,
    };

    event.preventDefault();
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
      payload: { message },
    });
  }

  render() {
    const { isLoading } = this.state;
    const loadingComponent = isLoading && <LoadingSection />;

    return (
      <Page>
        <Header />

        <main className="relative">
          <LoginFormSection handleSubmit={this.onSubmit} />

          {loadingComponent}
        </main>

        <Footer />
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, appState } = state;
  const { systemMessage } = appState;

  return {
    user,
    systemMessage,
  };
};

export default connect(mapStateToProps)(Login);
