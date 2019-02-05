import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    background-color: ${colors.transBlack};
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }

  .bar {
    height: ${rhythm.vt}px;
    background-color: ${colors.accent1};
    justify-content: center;
    align-items: center;
    transition: 0.5s width ease;
  }
`;

export default styles;
