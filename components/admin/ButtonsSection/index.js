import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { routes } from '../../../config';
import styles from './styles';

const ButtonsSection = ({ handleSignOut }) => {
  return (
    <div className="container">
      {routes.map((route) => {
        const { title, href, as, isAdmin, isNav } = route;

        if (isAdmin && !isNav) {
          return (
            <Fragment key={title}>
              <Link href={href} as={as}>
                <h2 className="button shadow-sm shadow-hover">{title}</h2>
              </Link>

              <div className="spacer-vt" />
            </Fragment>
          );
        }

        return null;
      })}

      <button
        type="button"
        onClick={handleSignOut}
        className="button secondary shadow-sm shadow-hover"
      >
        Sign out
      </button>

      <div className="spacer-vt" />

      <style jsx>{styles}</style>
    </div>
  );
};

ButtonsSection.propTypes = {
  handleSignOut: PropTypes.func,
};
ButtonsSection.defaultProps = {};

export default ButtonsSection;
