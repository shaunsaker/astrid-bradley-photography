import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

const Springboard = ({ image, text, link }) => {
  const { src, alt } = image;
  const { href, as } = link;

  return (
    <Link href={href} as={as}>
      <div className="container shadow-sm shadow-hover">
        <img src={src} alt={alt} />

        <div className="text-container">
          <h2 className="button">{text}</h2>
        </div>

        <style jsx>{styles}</style>
      </div>
    </Link>
  );
};

Springboard.propTypes = {
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }).isRequired,
  text: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    as: PropTypes.string,
  }),
};
Springboard.defaultProps = {};

export default Springboard;
