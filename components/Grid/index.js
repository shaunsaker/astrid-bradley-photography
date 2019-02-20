import React from 'react';
import PropTypes from 'prop-types';

import { rhythm } from '../../static/styles/styleConstants';
import styles from './styles';

// FIXME: size could be object of responsive breakpoints
// Can then use that in the media query
// FIXME: Separate item component out
// FIXME: External gutter width
// FIXME: Gutter is component (vt and hz)
const Grid = ({ size, items }) => {
  return (
    <div className="container row wrap">
      {items.map((item) => {
        const { id, component } = item;

        return (
          <div key={id} className="item-container">
            {component}
          </div>
        );
      })}

      <style jsx>
        {`
          @media (min-width: 480px) {
            .item-container {
              width: calc(${100 / size}% - ${((size - 1) * rhythm.vt) / size}px);
              margin-right: ${rhythm.vt}px;
            }

            .item-container:nth-child(${size}n) {
              margin-right: 0;
            }
          }
        `}
      </style>

      <style jsx>{styles}</style>
    </div>
  );
};

Grid.propTypes = {
  size: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, component: PropTypes.node })),
};
Grid.defaultProps = {
  size: 1,
};

export default Grid;
