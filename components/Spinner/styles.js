import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const SIZE = 40;
const BORDER_SIZE = 4;

const styles = css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: ${BORDER_SIZE}px solid ${colors.white};
  border-top: ${BORDER_SIZE}px solid ${colors.accent2};
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  animation: spin 1s linear infinite;
`;

export default styles;
