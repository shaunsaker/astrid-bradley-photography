import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../components/Page';
import Header from '../../components/Header';
import ButtonsSection from '../../components/admin/ButtonsSection';
import Footer from '../../components/Footer';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.onSignOut = this.onSignOut.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  static getInitialProps = async () => {};

  static propTypes = {
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onSignOut() {
    this.signOut();
  }

  signOut() {
    const { dispatch } = this.props;
    const message = 'Sign out successful.';

    dispatch({
      type: 'signOut',
      meta: {
        nextAction: {
          type: 'SET_SYSTEM_MESSAGE',
          payload: {
            message,
          },
        },
      },
    });
  }

  render() {
    return (
      <Page>
        <Header />

        <main>
          <h1>Admin Dashboard</h1>

          <ButtonsSection handleSignOut={this.onSignOut} />
        </main>

        <Footer />
      </Page>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Admin);
