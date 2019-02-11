import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LinkComponent = ({ action, children }) => {
  const { link, nextLink, handleClick } = action;

  if (link) {
    const { href, target } = link;

    return (
      <a href={href} target={target} rel="noopener noreferrer">
        {children}
      </a>
    );
  } else if (nextLink) {
    const { href, as } = link;

    return (
      <Link href={href} as={as}>
        {children}
      </Link>
    );
  } else if (handleClick) {
    return <button>{children}</button>;
  }

  return null;
};

LinkComponent.propTypes = {
  action: PropTypes.shape({
    link: PropTypes.shape({
      href: PropTypes.string,
      target: PropTypes.string,
    }),
    nextLink: {
      href: PropTypes.string,
      as: PropTypes.string,
    },
    handleClick: PropTypes.func,
  }),
  children: PropTypes.node,
};
LinkComponent.defaultProps = {};

export default LinkComponent;
