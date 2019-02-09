import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    width: 100%;
    height: ${sizes.photoHeight}px;
    border: 1px dashed ${colors.lightGrey};
  }
`;

export default styles;
