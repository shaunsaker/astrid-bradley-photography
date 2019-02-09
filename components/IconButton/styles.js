import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, sizes } from '../../static/styles/styleConstants';

const SIZE = sizes.button.default;
const SMALL_SIZE = sizes.button.small;

const styles = css`
  .container {
    position: relative;
    background-color: ${colors.accent1};
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
    z-index: 1;
  }

  .container.small {
    width: ${SMALL_SIZE}px;
    height: ${SMALL_SIZE}px;
    border-radius: ${SMALL_SIZE / 2}px;
    background-color: ${colors.white};
  }

  .icon-container {
  }

  .tooltip-container {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.375s ease;
  }

  .container:hover > .tooltip-container {
    visibility: visible;
    opacity: 1;
  }
`;

export default styles;
