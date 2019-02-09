import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const WIDTH = 120;

const styles = css`
  .container {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: ${WIDTH / -2}px;
    margin-bottom: ${rhythm.vt / 2}px;
    width: ${WIDTH}px;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
    background-color: ${colors.transBlack};
  }
`;

export default styles;
