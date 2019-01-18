import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../../static/styles/styleConstants';

const styles = css`
  ul {
    background-color: ${colors.white};
    padding: ${rhythm.vt}px ${rhythm.hz / 2}px 0;
    margin-top: ${rhythm.vt}px;

    @keyframes grow {
      from {
        opacity: 0;
        max-height: 0;
      }
      to {
        opacity: 1;
        max-height: 500px; /* anything value bigger than the menu */
      }
    }

    animation: grow 1s ease;
  }

  li {
    margin-bottom: ${rhythm.vt}px;
    text-align: center;
  }
`;

export default styles;
