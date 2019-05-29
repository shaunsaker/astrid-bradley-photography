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
    display: flex;
    flex-direction: row;
  }

  .logo-container {
    margin-right: ${rhythm.hz}px;
  }
`;

export default styles;
