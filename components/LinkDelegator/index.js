import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LinkDelegator = ({ action, children }) => {
  const { link, nextLink, handleClick } = action;

  if (link) {
    const { href, target } = link;

    return (
      <a href={href} target={target} rel="noopener noreferrer">
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
  } else if (handleClick) {
    return (
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    );
  }

  return null;
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
    handleClick: PropTypes.func,
  }).isRequired,
  children: PropTypes.node,
};
LinkDelegator.defaultProps = {};

export default LinkDelegator;
