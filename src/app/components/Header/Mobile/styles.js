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

  ul {
    position: fixed;
    top: 0;
    left: 0;
    right: ${rhythm.hz * 4}px;
    bottom: 0;
    background-color: ${colors.white};
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    align-items: flex-start;
  }

  ul > :global(li) {
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
