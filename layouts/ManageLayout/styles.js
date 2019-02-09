import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .delete-button-container {
    position: absolute;
    top: -${sizes.button.small}px;
    right: -${sizes.button.small}px;
  }

  .add-button-container {
    position: absolute;
    top: 0;
    right: -${sizes.coverPhotoHeight + rhythm.hz}px;
    bottom: 0;
    width: ${sizes.coverPhotoHeight}px;
  }

  /* TODO: Responsive styling */
`;

export default styles;
