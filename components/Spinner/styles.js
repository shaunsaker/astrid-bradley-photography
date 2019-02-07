import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const SIZE = 40;
const SMALL_SIZE = 20;
const BORDER_SIZE = SIZE / 10;
const SMALL_BORDER_SIZE = 3;

const styles = css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .container {
    border-width: ${BORDER_SIZE}px;
    border-style: solid;
    border-color: ${colors.lightGrey};
    border-top-color: ${colors.accent2};
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: 50%;
    animation: spin 0.5s linear infinite;
  }

  .container.small {
    border-width: ${SMALL_BORDER_SIZE}px;
    width: ${SMALL_SIZE}px;
    height: ${SMALL_SIZE}px;
  }
`;

export default styles;
