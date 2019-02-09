import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, sizes } from '../../static/styles/styleConstants';

const ICON_BUTTON_SIZE = sizes.button.small;

const styles = css`
  .image {
    height: 100%;
    object-fit: cover;
  }

  .icon-button-container {
    position: absolute;
    top: ${ICON_BUTTON_SIZE / -2}px;
    right: ${ICON_BUTTON_SIZE / -2}px;
  }

  .loading-container {
    border: 1px solid ${colors.lightGrey};
  }
`;

export default styles;
