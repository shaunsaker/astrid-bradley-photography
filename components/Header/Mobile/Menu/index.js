import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import ROUTES from '../../routes';
import styles from './styles';

import Link from '../../../Link';

const Menu = ({ router }) => {
  const { pathname } = router;

  return (
    <ul className="container">
      {ROUTES.map((route) => {
        const { href, title } = route;
        const isActive = route.href === pathname;

        return (
          <li key={href}>
            <Link href={href} active={isActive}>
              {title}
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
