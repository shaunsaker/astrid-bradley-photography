import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

export class AuthHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleAuth = this.handleAuth.bind(this);
    this.signInAnonymously = this.signInAnonymously.bind(this);

    this.state = {};
  }

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    authenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    Router.events.on('routeChangeComplete', this.handleAuth);

    this.handleAuth();
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.handleAuth);
  }

  handleAuth() {
    const { router, authenticated } = this.props;
    const { pathname } = router;

    // FIXME: This should come from routes config
    if (
      (!authenticated && pathname.indexOf('admin') > -1) ||
      pathname.indexOf('category') > -1 ||
      pathname.indexOf('shoot') > -1 ||
      pathname.indexOf('build-quote') > -1 ||
      pathname.indexOf('photo-queue') > -1
    ) {
      this.signInAnonymously();
    }
  }

  signInAnonymously() {
    const { dispatch } = this.props;

    dispatch({
      type: 'signInAnonymously',
    });
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  const { user } = state;
  const { authenticated } = user;

  return {
    authenticated,
  };
}

export default withRouter(connect(mapStateToProps)(AuthHandler));
