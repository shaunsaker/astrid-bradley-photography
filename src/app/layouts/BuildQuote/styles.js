import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .slider-container {
    margin: 0 -${rhythm.hz}px;
  }

  .slide-container {
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }
`;

export default styles;
