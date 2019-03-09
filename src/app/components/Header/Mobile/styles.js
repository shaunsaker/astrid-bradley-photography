import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    background-color: ${colors.white};
    z-index: 2;
  }

  .buttonContainer {
    align-items: flex-start;
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
