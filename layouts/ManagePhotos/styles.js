import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    flex-wrap: wrap;
  }

  .item-container {
    width: 33.3%;
    margin-bottom: ${rhythm.vt}px;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${colors.transWhite};
  }

  .progress-container {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export default styles;
