import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    height: 200vh;
  }

  .text-container {
    padding: ${rhythm.vt}px 0;
    align-items: flex-start;
  }
`;

export default styles;
