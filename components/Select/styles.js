import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

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
`;

export default styles;
