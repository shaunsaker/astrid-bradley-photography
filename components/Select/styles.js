import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  select {
    font-family: 'Arial';
    -webkit-appearance: none;
    border: none;
    border-radius: 0;
    background: none;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
    cursor: pointer;
  }

  select:focus {
    outline: 2px solid ${colors.white};
  }
`;

export default styles;
