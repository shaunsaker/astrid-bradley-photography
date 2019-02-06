import React from 'react';
import PropTypes from 'prop-types';

import { rhythm } from '../../static/styles/styleConstants';

import styles from './styles';

const GridItem = ({ gridSize, children }) => {
  return (
    <div className="container">
      {children}

      <style jsx>{styles}</style>

      <style jsx>{`
        @media (min-width: 480px) {
          .container {
            width: calc(${100 / gridSize}% - ${((gridSize - 1) * rhythm.vt) / gridSize}px);
            margin-right: ${rhythm.vt}px;
          }

          .container:nth-child(${gridSize + 'n'}) {
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
};

GridItem.propTypes = {
  gridSize: PropTypes.number,
  children: PropTypes.node,
};
GridItem.defaultProps = {
  gridSize: 1,
};

export default GridItem;
