import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from '../../../static/styles/styleConstants';

import Icon from '../../../components/Icon';

const AddFileButton = ({ multiple, handleAddFiles }) => {
  return (
    <div className="container relative flex-center">
      <Icon name="add" color={colors.accent1} />

      <input
        type="file"
        multiple={multiple}
        accepts="image/*"
        onChange={(event) => handleAddFiles(event.target.files)}
        className="input abs-stretch clickable"
      />

      <style jsx>{styles}</style>
    </div>
  );
};

AddFileButton.propTypes = {
  multiple: PropTypes.bool,
  handleAddFiles: PropTypes.func,
};
AddFileButton.defaultProps = {};

export default AddFileButton;
