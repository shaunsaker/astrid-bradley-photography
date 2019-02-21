import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrey};
    height: 100%;
  }

  .container.secondary {
    background-color: ${colors.transBlack};
    border: none;
  }
`;

export default styles;
