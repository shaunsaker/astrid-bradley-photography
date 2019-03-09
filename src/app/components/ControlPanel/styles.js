import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    position: fixed;
    bottom: 0;
    right: 0;
    flex-direction: row;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }
`;

export default styles;
