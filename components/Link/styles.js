import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  span {
    font-size: 0.8em;
    color: ${colors.grey};
    cursor: pointer;
    transition: color 0.5s ease;
  }

  span:hover {
    color: ${colors.black};
  }

  .active {
    font-weight: 700;
    color: ${colors.black};
  }
`;

export default styles;
