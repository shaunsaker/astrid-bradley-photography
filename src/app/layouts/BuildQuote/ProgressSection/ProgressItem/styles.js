import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm, sizes } from '../../../../static/styles/styleConstants';

const styles = css`
  .container {
    align-self: stretch;
  }

  .circle {
    min-width: ${sizes.button.small}px;
    min-height: ${sizes.button.small}px;
    border-radius: ${sizes.button.small / 2}px;
    background-color: ${colors.black};
    margin-right: ${rhythm.hz / 2}px;
  }

  .icon-container {
    margin-right: ${rhythm.hz / 2}px;

    @keyframes scale {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }

    animation: scale 0.5s ease;
  }
`;

export default styles;
