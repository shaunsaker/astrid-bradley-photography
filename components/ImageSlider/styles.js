import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const DOT_SIZE = 10;

const styles = css`
  .wrapper {
  }

  .container {
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }

  .slide {
    width: 100%;
    flex-shrink: 0;
    scroll-snap-align: center;
  }

  .image {
  }

  .dots-container {
    padding: 16px 0;
    justify-content: center;
  }

  .dot {
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: ${DOT_SIZE / 2}px;
    background-color: ${colors.white};
    margin: 0 ${DOT_SIZE / 2}px;
    transition: background-color 0.5s ease;
  }

  .active {
    background-color: ${colors.black};
  }
`;

export default styles;
