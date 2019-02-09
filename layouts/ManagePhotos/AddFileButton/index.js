import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import AddButton from '../../../components/AddButton';

const Button = ({ multiple, handleAddFiles }) => {
  return (
    <AddButton>
      <input
        type="file"
        multiple={multiple}
        accepts="image/*"
        onChange={(event) => handleAddFiles(event.target.files)}
        className="input abs-stretch"
      />

      <style jsx>{styles}</style>
    </AddButton>
  );
};

Button.propTypes = {
  multiple: PropTypes.bool,
  handleAddFiles: PropTypes.func,
};
Button.defaultProps = {};

export default Button;
