import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Select = ({ fieldName, id, options, handleChange }) => {
  return (
    <select
      name={fieldName}
      id={id}
      onChange={handleChange}
      className="shadow-sm shadow-hover clickable"
    >
      {options.map((option) => {
        const { name, value } = option;

        return (
          <option key={value} value={value}>
            {name}
          </option>
        );
      })}

      <style jsx>{styles}</style>
    </select>
  );
};

Select.propTypes = {
  fieldName: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  handleChange: PropTypes.func,
};
Select.defaultProps = {};

export default Select;
