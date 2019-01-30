import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const SelectCategorySection = ({ categories, handleChange }) => {
  return (
    <div className="container row">
      <label>Select a category</label>

      <span className="spacer-hz" />

      <select onChange={handleChange}>
        {categories.map((category) => {
          const { name, id } = category;

          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>

      <style jsx>{styles}</style>
    </div>
  );
};

SelectCategorySection.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  handleChange: PropTypes.func,
};
SelectCategorySection.defaultProps = {};

export default SelectCategorySection;
