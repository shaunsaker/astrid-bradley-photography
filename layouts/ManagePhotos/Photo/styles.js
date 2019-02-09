import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, sizes } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    margin-bottom: ${rhythm.vt}px;
  }

  .file-delete-button-container {
    position: absolute;
    top: -${sizes.button.small / 2}px;
    right: -${sizes.button.small / 2}px;
  }
`;

export default styles;
