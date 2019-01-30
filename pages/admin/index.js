import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from '../../components/Page';
import Header from '../../components/Header';
import ControlPanel from '../../components/admin/ControlPanel';
import IconButton from '../../components/IconButton';
import Footer from '../../components/Footer';

import withAuth from '../../wrappers/withAuth';

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
      <Page>
        <Header />

        <main>
          <h1>Admin Dashboard</h1>

          <ControlPanel>
            <IconButton iconName="lock" handleClick={this.onSignOut} />
          </ControlPanel>
        </main>

        <Footer />
      </Page>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default withAuth(connect(mapStateToProps)(Admin));
