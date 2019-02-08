import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    align-self: stretch;
  }

  .overlay {
    background-color: ${colors.transWhite};
  }

  .file-delete-button-container {
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;

export default styles;
