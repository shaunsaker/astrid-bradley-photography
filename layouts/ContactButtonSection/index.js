import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

import IconButton from '../../components/IconButton';

const ContactButtonSection = () => {
  return (
    <div className="container">
      <Link href="/contact">
        <span>
          <IconButton name="mail" />
        </span>
      </Link>

      <style jsx>{styles}</style>
    </div>
  );
};

ContactButtonSection.propTypes = {};
ContactButtonSection.defaultProps = {};

export default ContactButtonSection;
