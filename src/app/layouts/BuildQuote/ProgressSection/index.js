import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import ProgressItem from './ProgressItem';

const ProgressSection = ({ items, itemIndex, handleProgressItemClick }) => {
  return (
    <div className="row wrap">
      {items.map((slide, index) => {
        const { text, isChecked } = slide;
        const number = index + 1;
        const disabled = index > itemIndex;

        // Only display one progress item ahead, if any
        if (index <= itemIndex + 1) {
          return (
            <button
              key={text}
              type="button"
              onClick={() => handleProgressItemClick(index)}
              disabled={disabled}
              className={`progress-item-container ${disabled ? 'opacity' : ''}`}
            >
              <ProgressItem number={number} text={text} isChecked={isChecked} />
            </button>
          );
        }

        return null;
      })}

      <style jsx>{styles}</style>
    </div>
  );
};

ProgressSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isChecked: PropTypes.bool,
    }),
  ),
  itemIndex: PropTypes.number,
  handleProgressItemClick: PropTypes.func,
};
ProgressSection.defaultProps = {};

export default ProgressSection;
