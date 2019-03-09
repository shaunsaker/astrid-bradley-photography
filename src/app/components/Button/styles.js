import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  .text {
    text-align: center;
    font-family: 'Futura', sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.white};
  }
`;

export default styles;
