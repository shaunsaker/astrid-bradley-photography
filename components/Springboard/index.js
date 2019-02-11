import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Image from '../Image';
import LinkDelegator from '../LinkDelegator';

const Springboard = ({ image, text, action }) => {
  return (
    <LinkDelegator action={action}>
      <div className="container shadow-sm shadow-hover relative">
        <Image {...image} />

        <div className="text-container abs-stretch flex-center">
          <div className="button">{text}</div>
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
