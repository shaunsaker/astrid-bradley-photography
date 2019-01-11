import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { MdClose as CloseIcon } from 'react-icons/md';

import ROUTES from '../../routes';
import styles from './styles';
import { colors } from '../../../../static/styles/styleConstants';

import Logo from '../../../Logo';

const Menu = ({ handleClose, router }) => {
  const { pathname } = router;

  return (
    <div className="container">
      <div className="buttonContainer">
        <button type="button" onClick={handleClose}>
          <CloseIcon size={24} color={colors.black} />
        </button>
      </div>

      <Logo />

      <ul>
        {ROUTES.map((route) => {
          const { href, title } = route;
          const isActive = route.href === pathname;

          return (
            <Link key={href} href={href}>
              <li className={isActive ? 'active' : null}>{title}</li>
            </Link>
          );
        })}
      </ul>

      <style jsx>{styles}</style>
    </div>
  );
};

Menu.propTypes = {
  handleClose: PropTypes.func,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
Menu.defaultProps = {};

export default withRouter(Menu);
