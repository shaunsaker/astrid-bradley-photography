import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { connect } from 'react-redux';

import ROUTES from '../routes';

const Links = ({ router, isAdmin }) => {
  const { pathname, query } = router;
  const { id } = query;

  return (
    <Fragment>
      {ROUTES.map((route) => {
        const { href, title, prefetch, as, admin } = route;
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

        // IF the mapped route is an admin route
        // IF the user is admin
        // OR if the mapped route is not an admin route
        // THEN return it
        if ((admin && isAdmin) || !admin) {
          return (
            <li key={href}>
              <Link href={href} prefetch={prefetch} as={as}>
                <span className={`nav-link ${isActive && 'active'}`}>{title}</span>
              </Link>
            </li>
          );
        }

        return null;
      })}
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
  isAdmin: PropTypes.bool,
};
Links.defaultProps = {};

function mapStateToProps(state) {
  const { user } = state;
  const { uid } = user;
  const isAdmin = uid ? true : false;

  return {
    isAdmin,
  };
}

export default withRouter(connect(mapStateToProps)(Links));
