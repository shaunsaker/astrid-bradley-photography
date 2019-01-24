import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

export class DataHandler extends React.Component {
  constructor(props) {
    super(props);

    this.handleGetShoots = this.handleGetShoots.bind(this);
    this.getShoots = this.getShoots.bind(this);
    this.setHaveFetchedShoots = this.setHaveFetchedShoots.bind(this);

    this.state = {
      haveFetchedShoots: false,
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
    const { haveFetchedShoots } = this.state;
    const { router } = this.props;
    const { pathname } = router;

    // If we have not fetched shoots AND
    // If the user navigated to the category OR
    // If the user navigated to the shoot page THEN
    // Get all of the shoots
    if (
      !haveFetchedShoots &&
      (pathname.indexOf('category') > -1 || pathname.indexOf('shoot') > -1)
    ) {
      this.setHaveFetchedShoots(true);
      this.getShoots();
    }
  }

  getShoots() {
    const { dispatch } = this.props;

    dispatch({
      type: 'getCollection',
      meta: {
        url: 'shoots',
        nextAction: {
          type: 'SET_SHOOTS',
        },
      },
    });
  }

  setHaveFetchedShoots(haveFetchedShoots) {
    this.setState({ haveFetchedShoots });
  }

  render() {
    return null;
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(DataHandler));
