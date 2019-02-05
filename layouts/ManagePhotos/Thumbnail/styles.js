import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../../static/styles/styleConstants';

const COLUMNS = 4;
const ICON_BUTTON_SIZE = 20;

const styles = css`
  .container {
    width: 100%;
  }

  .thumbnail {
    object-fit: cover;
    height: 100%;
    max-height: 125px;
  }

  .icon-button-container {
    position: absolute;
    top: ${ICON_BUTTON_SIZE / -2}px;
    right: ${ICON_BUTTON_SIZE / -2}px;
  }

  @media (min-width: 480px) {
    .container {
      width: calc(${100 / COLUMNS}% - ${((COLUMNS - 1) * rhythm.vt) / COLUMNS}px);
      margin-right: ${rhythm.vt}px;
    }

    .container:nth-child(${COLUMNS + 'n'}) {
      margin-right: 0;
    }
  }
`;

export default styles;
