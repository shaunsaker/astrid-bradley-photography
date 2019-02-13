import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

export class DataHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleSyncData = this.handleSyncData.bind(this);
    this.setHaveSyncedData = this.setHaveSyncedData.bind(this);
    this.syncPackages = this.syncPackages.bind(this);
    this.syncProducts = this.syncProducts.bind(this);
    this.syncShoots = this.syncShoots.bind(this);

    this.state = {
      haveSyncedData: false,
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
    Router.events.on('routeChangeComplete', this.handleSyncData);

    this.handleSyncData();
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.handleSyncData);
  }

  handleSyncData() {
    const { haveSyncedData } = this.state;
    const { router } = this.props;
    const { pathname } = router;

    // If we have not synced shoots AND
    // If the user navigated to the category OR
    // If the user navigated to the shoot page THEN
    // Sync all of the shoots
    if (
      !haveSyncedData &&
      (pathname.indexOf('admin') > -1 ||
        pathname.indexOf('category') > -1 ||
        pathname.indexOf('shoot') > -1)
    ) {
      this.setHaveSyncedData(true);
      this.syncPackages();
      this.syncProducts();
      this.syncShoots();
    }
  }

  setHaveSyncedData(haveSyncedData) {
    this.setState({ haveSyncedData });
  }

  syncPackages() {
    const { dispatch } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        url: 'packages',
        nextAction: {
          type: 'SET_PACKAGES',
        },
      },
    });
  }

  syncProducts() {
    const { dispatch } = this.props;

    dispatch({
      type: 'sync',
      meta: {
        url: 'products',
        nextAction: {
          type: 'SET_PRODUCTS',
        },
      },
    });
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

  render() {
    return null;
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(DataHandler));
