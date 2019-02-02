import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Select from '../Select';

const SelectCategorySection = ({ options, handleChange }) => {
  return (
    <div className="container row">
      <label>Select a category</label>

      <div className="spacer-hz" />

      <Select options={options} handleChange={handleChange} />

      <style jsx>{styles}</style>
    </div>
  );
};

SelectCategorySection.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  handleChange: PropTypes.func,
};
SelectCategorySection.defaultProps = {};

export default SelectCategorySection;
