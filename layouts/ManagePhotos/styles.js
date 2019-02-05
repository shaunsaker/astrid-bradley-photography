import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    align-items: stretch;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${colors.transWhite};
    justify-content: center;
    align-items: center;
  }
`;

export default styles;
