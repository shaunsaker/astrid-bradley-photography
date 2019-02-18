import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrey};
  }
`;

export default styles;