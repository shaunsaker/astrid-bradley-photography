import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

import ROUTES from '../../routes';
import styles from './styles';

const Menu = ({ router }) => {
  const { pathname } = router;

  return (
    <ul>
      {ROUTES.map((route) => {
        const { href, title } = route;
        const isActive = route.href === pathname;

        return (
          <li key={href}>
            <Link href={href}>
              <span className={`nav-link ${isActive && 'active'}`}>{title}</span>
            </Link>
          </li>
        );
      })}

      <style jsx>{styles}</style>
    </ul>
  );
};

Menu.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
Menu.defaultProps = {};

export default withRouter(Menu);
