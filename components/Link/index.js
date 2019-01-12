import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

const LinkComponent = ({ href, active, children }) => {
  return (
    <Fragment>
      <Link href={href}>
        <span className={active ? 'active' : null}>{children}</span>
      </Link>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

LinkComponent.propTypes = {
  href: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.string,
};
LinkComponent.defaultProps = {};

export default LinkComponent;
