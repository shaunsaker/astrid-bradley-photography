import css from 'styled-jsx/css';

import { colors } from '../../../static/styles/styleConstants';

const styles = css`
  div {
  }

  ul {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 64px;
    padding: 0 48px;
  }

  li {
    font-size: 0.8em;
    color: ${colors.grey};
    cursor: pointer;
    transition: color 0.5s ease;
  }

  li:hover {
    color: ${colors.black};
  }

  li.active {
    font-weight: 700;
    color: ${colors.black};
  }
`;

export default styles;
