import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const SIZE = 50;

const styles = css`
  .container {
    position: relative;
    background-color: ${colors.accent1};
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
  }

  .tooltip-container {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .container:hover > .tooltip-container {
    visibility: visible;
    opacity: 1;
  }
`;

export default styles;
