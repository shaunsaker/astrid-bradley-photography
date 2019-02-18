import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const IMAGE_SIZE = 75;

const styles = css`
  ul {
  }

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
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
    color: ${colors.lightGrey};
    font-size: 1em;
    margin-top: -4px;
  }

  img {
    width: ${IMAGE_SIZE}px;
    height: ${IMAGE_SIZE}px;
    border-radius: ${IMAGE_SIZE / 2}px;
  }
`;

export default styles;
