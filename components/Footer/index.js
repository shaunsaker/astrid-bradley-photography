import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import styles from './styles';
import ROUTES from './routes';

import Link from '../Link';

const Footer = ({ router }) => {
  const { pathname } = router;

  return (
    <div>
      <ul>
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
      </ul>

      <style jsx>{styles}</style>
    </div>
  );
};

Footer.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
Footer.defaultProps = {};

export default withRouter(Footer);
