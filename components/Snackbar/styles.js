import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, colors } from '../../static/styles/styleConstants';

const styles = css`
  .wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.transBlack};
    z-index: 2;
    animation: translate-up 0.5s ease;
  }

  .container {
    position: relative;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }

  .text {
    color: ${colors.white};
  }

  .close-button {
    position: absolute;
    top: ${rhythm.vt}px;
    right: ${rhythm.hz}px;
  }

  @keyframes translate-up {
    from {
      opacity: 0;
      transform: translateY(56px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default styles;
