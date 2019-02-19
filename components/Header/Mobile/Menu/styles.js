import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../../static/styles/styleConstants';

const styles = css`
  ul {
    position: fixed;
    top: 0;
    left: 0;
    right: ${rhythm.hz * 4}px;
    bottom: 0;
    background-color: ${colors.white};
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    align-items: flex-start;

    @keyframes translate-x {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }

    animation: translate-x 0.5s ease;
  }

  ul > :global(li) {
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
