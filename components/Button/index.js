import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

const Wrapper = ({ link, children }) => {
  if (link) {
    const { href, as } = link;

    return (
      <Link href={href} as={as}>
        {children}
      </Link>
    );
  }

  return children;
};

const Button = ({ text, type, noShadow, handleClick, link }) => {
  return (
    <Wrapper link={link}>
      <button
        type={type}
        onClick={handleClick}
        className={`container ${!noShadow && 'shadow-sm shadow-hover'}`}
      >
        {text}
      </button>

      <style jsx>{styles}</style>
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  noShadow: PropTypes.bool,
  handleClick: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    as: PropTypes.string,
  }),
};
Button.defaultProps = {
  type: 'button',
};

export default Button;
