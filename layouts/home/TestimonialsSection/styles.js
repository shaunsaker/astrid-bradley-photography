import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styles/styleConstants';

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
    padding: 16px 12px;
  }

  span {
    align-self: center;
    transform: scaleX(2);
    color: ${colors.white};
    font-size: 1em;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    margin-top: -3px;
  }

  img {
    width: ${IMAGE_SIZE}px;
    height: ${IMAGE_SIZE}px;
    border-radius: ${IMAGE_SIZE / 2}px;
  }
`;

export default styles;
