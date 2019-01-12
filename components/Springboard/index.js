import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

const Springboard = ({ image, text, href }) => {
  const { src, alt } = image;

  return (
    <Link href={href}>
      <div className="container shadow-sm">
        <img src={src} alt={alt} />

        <div className="text-container">
          <h2>{text}</h2>
        </div>

        <style jsx>{styles}</style>
      </div>
    </Link>
  );
};

Springboard.propTypes = {
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }).isRequired,
  text: PropTypes.string,
  href: PropTypes.string,
};
Springboard.defaultProps = {};

export default Springboard;
