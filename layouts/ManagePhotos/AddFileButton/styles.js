import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    height: 100%;
    min-height: 125px;
    border: 1px dashed ${colors.lightGrey};
    margin-bottom: ${rhythm.vt}px;
  }

  .input {
    cursor: pointer;
    opacity: 0;
  }
`;

export default styles;
