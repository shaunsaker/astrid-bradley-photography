import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

import Logo from '../../Logo';
import withLinks from '../withLinks';

const Desktop = ({ links }) => {
  return (
    <div className="hidden-md-down">
      <div className="logo-container">
        <Logo />
      </div>

      <ul className="row">
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link href={link.href} prefetch={link.prefetch} as={link.as}>
                <span className={`nav-link clickable ${link.isActive ? 'active' : ''}`}>
                  {link.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <style jsx>{styles}</style>
    </div>
  );
};

Desktop.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})),
};
Desktop.defaultProps = {};

export default withLinks(Desktop);
