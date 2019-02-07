import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../../static/styles/styleConstants';

const styles = css`
  .wrapper {
  }

  .container {
    align-self: stretch;
    background-color: ${colors.white};
    margin: ${rhythm.vt / 4}px ${rhythm.hz / 4}px;
  }

  .bar {
    border: 1px solid ${colors.white};
    height: ${rhythm.vt / 2}px;
    background-color: ${colors.accent2};
    transition: 0.5s width ease;
    width: 0%;
  }
`;

export default styles;
