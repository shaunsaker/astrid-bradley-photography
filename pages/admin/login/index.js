import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

    this.state = {
      isLoading: false,
    };
  }

  static getInitialProps = async () => {};

  static propTypes = { dispatch: PropTypes.func };

  static defaultProps = {};

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

  render() {
    const { isLoading } = this.state;
    const loadingComponent = false && isLoading && <LoadingSection />;

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

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Login);
