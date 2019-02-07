import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    height: 100%;
    border: 1px dashed ${colors.lightGrey};
  }

  .input {
    width: 100%;
    cursor: pointer;
    opacity: 0;
  }
`;

export default styles;
