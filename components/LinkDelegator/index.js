import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LinkDelegator = ({ action, children, style }) => {
  const { link, nextLink, button } = action;

  if (link) {
    const { href, target } = link;

    return (
      <a href={href} target={target} rel="noopener noreferrer" style={style}>
        {children}
      </a>
    );
  } else if (nextLink) {
    const { href, as } = nextLink;

    return (
      <Link href={href} as={as}>
        {children}
      </Link>
    );
  } else if (button) {
    const { type, handleClick } = button;

    return (
      <button type={type} onClick={handleClick} style={style}>
        {children}
      </button>
    );
  }

  return children;
};

LinkDelegator.propTypes = {
  action: PropTypes.shape({
    link: PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string,
    }),
    nextLink: PropTypes.shape({
      href: PropTypes.string,
      as: PropTypes.string,
    }),
    button: PropTypes.shape({
      type: PropTypes.string,
      handleClick: PropTypes.func,
    }),
  }),
  children: PropTypes.node,
  style: PropTypes.shape({}),
};
LinkDelegator.defaultProps = {
  action: {},
};

export default LinkDelegator;
