import React from 'react';
import PropTypes from 'prop-types';

import SLIDES from '../slides';
import styles from './styles';

import ProgressItem from './ProgressItem';

const ProgressSection = ({ slideIndex, handleProgressItemClick }) => {
  return (
    <div className="row wrap">
      {SLIDES.map((slide, index) => {
        const { title } = slide;
        const number = index + 1;
        const disabled = index > slideIndex;

        // Only display one progress item ahead, if any
        if (index <= slideIndex + 1) {
          return (
            <button
              key={title}
              type="button"
              onClick={() => handleProgressItemClick(index)}
              disabled={disabled}
              className={`progress-item-container ${disabled && 'opacity'}`}
            >
              <ProgressItem number={number} text={title} />
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
  slideIndex: PropTypes.number,
  handleProgressItemClick: PropTypes.func,
};
ProgressSection.defaultProps = {};

export default ProgressSection;
