import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const DOT_SIZE = 10;

const styles = css`
  .wrapper {
  }

  .container {
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    overflow-y: hidden;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none; /* FIXME: Only works on older Firefox versions */
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  .slide {
    width: 100%;
    flex-shrink: 0;
    scroll-snap-align: center;
  }

  .image {
  }

  .dots-container {
    padding-top: ${rhythm.vt}px;
    justify-content: center;
  }

  .dot {
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: ${DOT_SIZE / 2}px;
    background-color: ${colors.white};
    margin: 0 ${DOT_SIZE / 2}px;
    transition: all 0.5s ease;
  }

  .active {
    background-color: ${colors.lightGrey};
  }
`;

export default styles;
