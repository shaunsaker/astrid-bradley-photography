import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import BUTTONS from './buttons';
import styles from './styles';

const ButtonsSection = ({ handleSignOut }) => {
  return (
    <div className="container">
      {BUTTONS.map((button) => {
        const { text, link } = button;
        const { href, as } = link;

        return (
          <Fragment key={text}>
            <Link href={href} as={as}>
              <h2 className="button shadow-sm shadow-hover">{text}</h2>
            </Link>

            <div className="spacer-vt" />
          </Fragment>
        );
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
