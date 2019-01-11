import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

import styles from './styles';
import ROUTES from './routes';

import Logo from '../Logo';

const Header = ({ router }) => {
  const { pathname } = router;

  return (
    <div>
      <Logo />

      <ul>
        {ROUTES.map((route) => {
          const { href, title } = route;
          const isActive = route.href === pathname;
          console.log(isActive);

          return (
            <Link key={href} href={href}>
              <li className={isActive && 'active'}>{title}</li>
            </Link>
          );
        })}
      </ul>

      <style jsx>{styles}</style>
    </div>
  );
};

Header.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
Header.defaultProps = {};

export default withRouter(Header);
