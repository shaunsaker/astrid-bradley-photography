import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const IMAGE_SIZE = 132;

const styles = css`
  ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    margin: ${rhythm.vt}px;
  }

  img {
    width: ${IMAGE_SIZE}px;
    height: ${IMAGE_SIZE}px;
    border-radius: ${IMAGE_SIZE / 2}px;
  }
`;

export default styles;
