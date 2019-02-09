import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

import GridImage from '../GridImage';
import Button from '../Button';

const Springboard = ({ image, text, link }) => {
  const { src, alt } = image;
  const { href, as } = link;

  return (
    <Link href={href} as={as}>
      <div className="container shadow-sm shadow-hover relative">
        <GridImage src={src} alt={alt} />

        <div className="text-container abs-stretch flex-center">
          <Button text={text} noShadow />
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
