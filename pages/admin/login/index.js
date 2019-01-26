import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../../components/Page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Spinner from '../../../components/Spinner';

import LoginFormSection from '../../../layouts/LoginFormSection';

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

  signInUser(user) {
    const { dispatch } = this.props;

    console.log(user);
  }

  render() {
    const { isLoading } = this.state;
    const loadingComponent = isLoading && <Spinner />;

    return (
      <Page>
        <Header />

        <main>
          <LoginFormSection handleSubmit={this.onSubmit} />
        </main>

        <Footer />

        {loadingComponent}
      </Page>
    );
  }
}

Login.getInitialProps = async () => {};

Login.propTypes = {};

Login.defaultProps = {};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Login);
