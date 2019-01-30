import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './styles';

const SuccessSection = ({ shootID }) => {
  const uploadPhotosHREF = `/admin/upload-photos?id=${shootID}`;

  return (
    <div className="container">
      <Link href={uploadPhotosHREF}>
        <h2 className="button">Upload Photos</h2>
      </Link>

      <div className="spacer-vt" />

      <Link href="/admin/add-a-shoot">
        <h2 className="button">Add Another Shoot</h2>
      </Link>

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
