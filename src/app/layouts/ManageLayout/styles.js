import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .delete-button-container {
    position: absolute;
    top: -${sizes.button.small / 2}px;
    right: -${sizes.button.small / 2}px;
  }

  .add-button-container {
    position: absolute;
    top: 0;
    right: -${sizes.photoHeight + rhythm.hz}px;
    bottom: 0;
    width: ${sizes.photoHeight}px;
  }
`;

export default styles;
