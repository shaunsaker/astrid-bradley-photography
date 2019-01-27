import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    position: fixed;
    bottom: ${rhythm.vt}px;
    right: ${rhythm.hz}px;
    z-index: 2;
  }
`;

export default styles;
