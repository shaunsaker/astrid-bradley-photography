import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    height: 100%;
    min-height: 125px;
    justify-content: center;
    align-items: center;
    border: 1px dashed ${colors.lightGrey};
    margin-bottom: ${rhythm.vt}px;
  }

  .input {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 0;
    width: 100%;
  }
`;

export default styles;
