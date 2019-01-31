import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    background-color: ${colors.transBlack};
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    color: ${colors.white};
    cursor: pointer;
    text-align: center;
    font-family: 'Futura', sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 0.8em;
    line-height: 1.5em;
    color: ${colors.white};
  }
`;

export default styles;
