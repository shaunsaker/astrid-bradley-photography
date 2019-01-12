import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

import ROUTES from '../../routes';
import styles from './styles';

const Menu = ({ router }) => {
  const { pathname } = router;

  return (
    <ul className="container">
      {ROUTES.map((route) => {
        const { href, title } = route;
        const isActive = route.href === pathname;

        return (
          <Link key={href} href={href}>
            <li className={isActive ? 'active' : null}>{title}</li>
          </Link>
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
