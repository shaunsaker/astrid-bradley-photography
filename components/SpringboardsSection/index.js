import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Springboard from '../Springboard';

const SpringboardsSection = ({ springboards }) => {
  return (
    <section>
      {springboards &&
        springboards.map((springboard) => {
          return (
            <div key={springboard.text} className="item-container">
              <Springboard {...springboard} />
            </div>
          );
        })}

      <style jsx>{styles}</style>
    </section>
  );
};

SpringboardsSection.propTypes = {
  springboards: PropTypes.arrayOf(PropTypes.shape({})),
};
SpringboardsSection.defaultProps = {};

export default SpringboardsSection;
