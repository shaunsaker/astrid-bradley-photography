import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'next/router';

export default (ComposedComponent) => {
  class withAuth extends React.Component {
    constructor(props) {
      super(props);

      this.redirectToLoginPage = this.redirectToLoginPage.bind(this);

      this.state = {};
    }

    static propTypes = {
      authenticated: PropTypes.bool,
    };

    static defaultProps = {};

    componentDidMount() {
      const { authenticated } = this.props;

      if (!authenticated) {
        // If the user is not signed in
        this.redirectToLoginPage();
      }
    }

    componentDidUpdate(prevProps) {
      const { authenticated } = this.props;

      if (!authenticated && prevProps.authenticated) {
        // If the user was signed in but not anymore
        this.redirectToLoginPage();
      }
    }

    redirectToLoginPage() {
      // Replace the route to not allow browser back
      Router.replace('/admin/login');
    }

    render() {
      const { authenticated } = this.props;

      return (
        <div style={{ visibility: !authenticated ? 'hidden' : 'visible' }}>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    const { user } = state;
    const { uid } = user;
    const authenticated = uid ? true : false;

    return {
      authenticated,
    };
  }

  return connect(mapStateToProps)(withAuth);
};
