import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const FileInput = ({ handleChange }) => {
  return (
    <div>
      <input type="file" id="input-file" multiple onChange={handleChange} />

      <style jsx>{styles}</style>
    </div>
  );
};

FileInput.propTypes = {
  handleChange: PropTypes.func,
};
FileInput.defaultProps = {};

export default FileInput;
