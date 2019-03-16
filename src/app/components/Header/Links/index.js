import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { connect } from 'react-redux';

import { routes } from '../../../config';
import styles from './styles';

const Links = ({ router, authenticated }) => {
  const { pathname, query } = router;
  const { id } = query;

  return (
    <Fragment>
      {routes.map((route) => {
        const { href, title, prefetch, as, isAdmin, isNav } = route;
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

        // IF the mapped route is a nav route
        // AND
        // IF the mapped route is an admin route
        // IF the user is admin
        // OR if the mapped route is not an admin route
        // THEN return it
        if (isNav && ((isAdmin && authenticated) || !isAdmin)) {
          return (
            <li key={href}>
              <Link href={href} prefetch={prefetch} as={as}>
                <span className={`nav-link clickable ${isActive && 'active'}`}>{title}</span>
              </Link>
            </li>
          );
        }

        return null;
      })}

      <style jsx>{styles}</style>
    </Fragment>
  );
};

Links.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  authenticated: PropTypes.bool,
};
Links.defaultProps = {};

const mapStateToProps = (state) => {
  const { user } = state;
  const { uid } = user;
  const authenticated = uid ? true : false;

  return { authenticated };
};

export default withRouter(connect(mapStateToProps)(Links));