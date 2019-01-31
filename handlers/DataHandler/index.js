import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

export class DataHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleGetShoots = this.handleGetShoots.bind(this);
    this.syncShoots = this.syncShoots.bind(this);
    this.setHaveSyncedShoots = this.setHaveSyncedShoots.bind(this);

    this.state = {
      haveSyncedShoots: false,
    };
  }

  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    Router.events.on('routeChangeComplete', this.handleGetShoots);

    this.handleGetShoots();
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.handleGetShoots);
  }

  handleGetShoots() {
    const { haveSyncedShoots } = this.state;
    const { router } = this.props;
    const { pathname } = router;

    // If we have not synced shoots AND
    // If the user navigated to the category OR
    // If the user navigated to the shoot page THEN
    // Sync all of the shoots
    if (
      !haveSyncedShoots &&
      (pathname.indexOf('admin') > -1 ||
        pathname.indexOf('category') > -1 ||
        pathname.indexOf('shoot') > -1)
    ) {
      this.setHaveSyncedShoots(true);
      this.syncShoots();
    }
  }

  syncShoots() {
    const { dispatch } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        url: 'shoots',
        nextAction: {
          type: 'SET_SHOOTS',
        },
      },
    });
  }

  setHaveSyncedShoots(haveSyncedShoots) {
    this.setState({ haveSyncedShoots });
  }

  render() {
    return null;
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(DataHandler));
