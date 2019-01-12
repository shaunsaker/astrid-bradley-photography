import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  span {
    font-size: 1em;
    color: ${colors.grey};
    cursor: pointer;
  }

  .active {
    font-weight: 700;
    color: ${colors.black};
  }
`;

export default styles;
