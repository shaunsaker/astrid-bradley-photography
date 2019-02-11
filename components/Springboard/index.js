import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Image from '../Image';
import LinkDelegator from '../LinkDelegator';
import Button from '../Button';

const Springboard = ({ image, text, action }) => {
  return (
    <LinkDelegator action={action}>
      <div className="container shadow-sm shadow-hover relative">
        <Image {...image} />

        <div className="text-container abs-stretch flex-center">
          <Button text={text} noShadow />
        </div>

        <style jsx>{styles}</style>
      </div>
    </LinkDelegator>
  );
};

Springboard.propTypes = {
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }).isRequired,
  text: PropTypes.string,
  action: PropTypes.shape({}),
};
Springboard.defaultProps = {};

export default Springboard;
