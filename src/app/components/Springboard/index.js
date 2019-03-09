import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Card from '../Card';
import Image from '../Image';
import Button from '../Button';

const Springboard = ({ image, text, action }) => {
  return (
    <Card action={action} style={{ padding: 0 }}>
      <Image {...image} />

      <div className="text-container abs-stretch flex-center">
        <Button text={text} />
      </div>

      <style jsx>{styles}</style>
    </Card>
  );
};

Springboard.propTypes = {
  image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }).isRequired,
  text: PropTypes.string,
  action: PropTypes.shape({}),
};
Springboard.defaultProps = {};

export default Springboard;
