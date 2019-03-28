import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const DOT_SIZE = 10;

const styles = css`
  .slide {
    width: 100%;
    flex-shrink: 0;
    scroll-snap-align: center;
  }

  .dots-container {
    padding-top: ${rhythm.vt}px;
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
