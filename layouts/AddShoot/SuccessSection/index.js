import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Button from '../../../components/Button';

const SuccessSection = ({ shootID }) => {
  const uploadPhotosHREF = `/admin/upload-photos?id=${shootID}`;

  return (
    <div className="container">
      <Button text="Upload Photos" link={{ href: uploadPhotosHREF }} />

      <div className="spacer-vt" />

      <Button text="Add Another Shoot" link={{ href: '/admin/add-a-shoot' }} />

      <div className="spacer-vt" />

      <style jsx>{styles}</style>
    </div>
  );
};

SuccessSection.propTypes = {
  shootID: PropTypes.string,
};
SuccessSection.defaultProps = {};

export default SuccessSection;
