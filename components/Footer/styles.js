import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  div {
    padding: ${rhythm.vt}px 0;
    align-items: center;
    padding-bottom: 82px;
  }

  small {
    color: ${colors.grey};
    text-align: center;
  }
`;

export default styles;
