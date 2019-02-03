import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    width: 100%;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${colors.white};
  }

  .container.secondary {
    background-color: ${colors.transBlack};
  }

  .text-container {
    flex: 1;
    justify-content: space-between;
    text-align: left;
  }
`;

export default styles;
