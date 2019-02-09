import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, sizes } from '../../../static/styles/styleConstants';

const styles = css`
  .overlay {
    height: 100%;
    background-color: ${colors.transWhite};
  }

  .file-delete-button-container {
    position: absolute;
    top: -${sizes.button.small / 2}px;
    right: -${sizes.button.small / 2}px;
  }
`;

export default styles;
