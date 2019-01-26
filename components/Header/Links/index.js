import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

import ROUTES from '../routes';

const Links = ({ router }) => {
  const { pathname } = router;

  return ROUTES.map((route) => {
    const { href, title, prefetch, as } = route;
    const isActive = route.href === pathname;

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
