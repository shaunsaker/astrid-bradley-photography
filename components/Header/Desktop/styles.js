import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  div {
    margin-bottom: ${rhythm.vt * 4}px;
  }

  ul {
    justify-content: space-between;
    margin-top: ${rhythm.vt * 4}px;
    padding: 0 ${rhythm.hz * 2}px;
  }
`;

export default styles;
