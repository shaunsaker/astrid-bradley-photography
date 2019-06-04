import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { routes } from '../../../config';

export default (ComposedComponent) => {
  class withLinks extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    static propTypes = {
      /*
       * withRouter
       */
      router: PropTypes.shape({
        pathname: PropTypes.string,
        query: PropTypes.shape({
          id: PropTypes.string,
        }),
      }),

      /*
       * Store
       */
      isAuthenticated: PropTypes.bool,
    };

    static defaultProps = {};

    render() {
      const { router, isAuthenticated } = this.props;
      const { pathname, query } = router;
      const { id } = query;

      /*
       * Create the links
       * Attach isActive state
       */
      const links = routes.map((route) => {
        const { href } = route;
        let isActive = href === pathname;

        // IF the actual route is the category page
        // IF the mapped route is the category page
        // IF the mapped routes id matches that of the actual route
        if (
          pathname.indexOf('category') > -1 &&
          href.indexOf('category') > -1 &&
          href.indexOf(id) > -1
        ) {
          isActive = true;
        }

        return {
          ...route,
          isActive,
        };
      });

      /*
       * If the route is a nav route
       * And the user is not authenticated
       * Filter out the admin routes
       */
      const newLinks = links.filter(
        (route) => route.isNav && ((route.isAdmin && isAuthenticated) || !route.isAdmin),
      );

      return <ComposedComponent links={newLinks} {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    const { user } = state;
    const { uid, isAnonymous } = user;
    const isAuthenticated = uid && !isAnonymous;

    return { isAuthenticated };
  }

  return withRouter(connect(mapStateToProps)(withLinks));
};
