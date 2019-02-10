import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, colors } from '../../static/styles/styleConstants';

const styles = css`
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${colors.transBlack};
    z-index: 2;
    transition: transform 0.5s ease;
    animation: translate-left 0.5s ease;
  }

  .animate-in {
    transform: translateY(0);
  }

  .animate-out {
    transform: translateX(100%);
  }

  .container {
    position: relative;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
  }

  @keyframes translate-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export default styles;
