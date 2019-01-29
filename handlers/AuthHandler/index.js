import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

import { routes } from '../../config';
import firebase from '../../services/firebase';

export class AuthHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuthStateChange = this.handleAuthStateChange.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.isAdminRoute = this.isAdminRoute.bind(this);
    this.signInUser = this.signInUser.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
    this.redirectToLoginPage = this.redirectToLoginPage.bind(this);
    this.redirectToAdminPage = this.redirectToAdminPage.bind(this);

    this.state = {};
  }

  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
    }),
    router: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    this.handleAuthStateChange();

    Router.events.on('routeChangeComplete', this.handleRouteChange);
  }

  async handleAuthStateChange() {
    const { router } = this.props;
    const { pathname } = router;
    const fb = await firebase();

    fb.auth().onAuthStateChanged((user) => {
      if (!user && this.isAdminRoute(pathname)) {
        // IF the user has signed out
        // IF it is an admin route
        // THEN redirect to the login page
        this.signOutUser();
        this.redirectToLoginPage();
      } else if (user) {
        this.redirectToAdminPage();
        this.signInUser(user);
      }
    });
  }

  handleRouteChange(pathname) {
    if (this.isAdminRoute(pathname)) {
      this.redirectToLoginPage();
    }
  }

  isAdminRoute(pathname) {
    const isAdminRoute = routes.filter((route) => {
      const { isAdmin, href } = route;

      if (isAdmin && href === pathname) {
        return route;
      }

      return null;
    }).length;

    return isAdminRoute;
  }

  signInUser(user) {
    const { dispatch } = this.props;

    dispatch({
      type: 'SIGN_IN_USER',
      payload: user,
    });
  }

  signOutUser() {
    const { dispatch } = this.props;

    dispatch({
      type: 'SIGN_OUT_USER',
    });
  }

  redirectToLoginPage() {
    Router.replace('/admin/login');
  }

  redirectToAdminPage() {
    Router.push('/admin');
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(mapStateToProps)(AuthHandler));
