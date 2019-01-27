import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

import ROUTES from '../routes';

const Links = ({ router }) => {
  const { pathname, query } = router;
  const { id } = query;

  return ROUTES.map((route) => {
    const { href, title, prefetch, as } = route;
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

    return (
      <li key={href}>
        <Link href={href} prefetch={prefetch} as={as}>
          <span className={`nav-link ${isActive && 'active'}`}>{title}</span>
        </Link>
      </li>
    );
  });
};

Links.propTypes = {};
Links.defaultProps = {};

export default withRouter(Links);
