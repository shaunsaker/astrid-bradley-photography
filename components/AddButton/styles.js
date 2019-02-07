import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, grid } from '../../static/styles/styleConstants';

const SIZE = grid.third;

const styles = css`
  .container {
    width: 100%;
    height: ${SIZE}px;
    border: 1px dashed ${colors.lightGrey};
  }
`;

export default styles;
