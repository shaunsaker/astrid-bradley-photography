import React from 'react';
import PropTypes from 'prop-types';

import SLIDES from '../slides';
import styles from './styles';

import ProgressItem from './ProgressItem';

const ProgressSection = ({ slideIndex }) => {
  return (
    <div className="row wrap">
      {SLIDES.map((slide, index) => {
        const { title } = slide;
        const number = index + 1;
        const opacity = index > slideIndex;

        // Only display one progress item ahead, if any
        if (index <= slideIndex + 1) {
          return (
            <div key={title} className={`progress-item-container ${opacity && 'opacity'}`}>
              <ProgressItem number={number} text={title} />
            </div>
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
};
ProgressSection.defaultProps = {};

export default ProgressSection;
