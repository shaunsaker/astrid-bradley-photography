import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import IconButton from '../../../components/IconButton';

const AddPhotosButton = ({ handleChange }) => {
  return (
    <div className="container relative">
      <IconButton iconName="add" label="Upload Photos" />

      <input type="file" multiple accepts="image/*" onChange={handleChange} className="input" />

      <style jsx>{styles}</style>
    </div>
  );
};

AddPhotosButton.propTypes = {
  handleChange: PropTypes.func,
};
AddPhotosButton.defaultProps = {};

export default AddPhotosButton;
