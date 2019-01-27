import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

export class AuthHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdminRedirect = this.handleAdminRedirect.bind(this);

    this.state = {};
  }

  static propTypes = {
    user: PropTypes.shape({}),
    router: PropTypes.shape(),
  };

  static defaultProps = {};

  componentDidMount() {
    // Handle route change
    Router.events.on('routeChangeComplete', this.handleAdminRedirect);

    // Handle app mount
    this.handleAdminRedirect();
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.handleAdminRedirect);
  }

  handleAdminRedirect() {
    const { router, user } = this.props;
    const { pathname } = router;
    const { uid } = user;

    // IF the user navigated to an admin page
    // IF the user does not have a uid AKA is not signed in
    if (pathname.indexOf('admin') > -1 && !uid) {
      router.replace('/admin/login');
    }
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