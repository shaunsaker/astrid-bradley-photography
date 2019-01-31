import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  select {
    -webkit-appearance: none;
    border: 1px solid ${colors.lightGrey};
    border-radius: 0;
    background: none;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
    cursor: pointer;
  }
`;

export default styles;
