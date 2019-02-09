import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import GridItem from '../GridItem';

const Placeholder = ({ gridSize, isThumbnail, children }) => {
  return (
    <GridItem gridSize={gridSize} isThumbnail={isThumbnail}>
      <div className="container relative">{children}</div>

      <style jsx>{styles}</style>
    </GridItem>
  );
};

Placeholder.propTypes = {
  gridSize: PropTypes.number,
  isThumbnail: PropTypes.bool,
  children: PropTypes.node,
};
Placeholder.defaultProps = {};

export default Placeholder;
