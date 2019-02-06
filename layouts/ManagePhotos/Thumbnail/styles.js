import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const ICON_BUTTON_SIZE = 20;

const styles = css`
  .thumbnail {
    object-fit: cover;
    height: 125px;
  }

  .icon-button-container {
    position: absolute;
    top: ${ICON_BUTTON_SIZE / -2}px;
    right: ${ICON_BUTTON_SIZE / -2}px;
  }

  .loading-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 125px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.lightGrey};
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
