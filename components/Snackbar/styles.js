import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, colors } from '../../static/styles/styleConstants';

const styles = css`
  .wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.black};
    z-index: 2;
    transition: transform 0.5s ease;
    animation: translate-up 0.5s ease;
  }

  .animate-in {
    transform: translateY(0);
  }

  .animate-out {
    transform: translateY(100%);
  }

  .container {
    position: relative;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
  }

  @keyframes translate-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export default styles;
