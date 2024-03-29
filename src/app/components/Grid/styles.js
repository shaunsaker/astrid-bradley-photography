import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    align-items: stretch;
  }

  .item-container {
    width: 100%;
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
