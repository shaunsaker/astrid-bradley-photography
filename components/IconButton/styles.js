import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const SIZE = 50;

const styles = css`
  button {
    background-color: ${colors.white};
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
  }
`;

export default styles;
