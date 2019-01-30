import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const SIZE = 50;

const styles = css`
  .container {
    position: relative;
    background-color: ${colors.white};
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
  }

  .secondary {
    background-color: ${colors.lightGrey};
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
