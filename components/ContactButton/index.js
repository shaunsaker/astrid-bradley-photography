import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

import IconButton from '../IconButton';

const ContactButton = () => {
  return (
    <div className="container">
      <Link href="/contact">
        <span>
          <IconButton iconName="mail" />
        </span>
      </Link>

      <style jsx>{styles}</style>
    </div>
  );
};

ContactButton.propTypes = {};
ContactButton.defaultProps = {};

export default ContactButton;
