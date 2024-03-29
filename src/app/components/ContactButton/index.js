import React from 'react';
import Link from 'next/link';

import styles from './styles';

import IconButton from '../IconButton';

const ContactButton = () => {
  return (
    <div className="container">
      <Link href="/contact">
        <span>
          <IconButton name="Contact" iconName="mail" />
        </span>
      </Link>

      <style jsx>{styles}</style>
    </div>
  );
};

ContactButton.propTypes = {};
ContactButton.defaultProps = {};

export default ContactButton;
