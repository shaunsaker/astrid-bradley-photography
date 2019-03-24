import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const IMAGE_SIZE = 75;

const styles = css`
  .item-container {
    align-items: center;
  }

  .card-wrapper {
    align-self: stretch;
  }

  .card-container {
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    padding-bottom: 0;
  }

  span {
    align-self: center;
    transform: scaleX(2);
    color: ${colors.grey};
    font-size: 16px;
    line-height: 20px;
    margin-top: -5px;
  }

  img {
    width: ${IMAGE_SIZE}px;
    height: ${IMAGE_SIZE}px;
    border-radius: ${IMAGE_SIZE / 2}px;
  }
`;

export default styles;
