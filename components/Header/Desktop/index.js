import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles';
import ROUTES from '../routes';

import Logo from '../../Logo';

const Desktop = ({ router }) => {
  const { pathname } = router;

  return (
    <div className="desktop">
      <Logo />

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
      </ul>

      <style jsx>{styles}</style>
    </div>
  );
};

Desktop.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
Desktop.defaultProps = {};

export default withRouter(Desktop);
