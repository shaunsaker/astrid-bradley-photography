import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styles/styleConstants';

const styles = css`
  .nav-link {
    font-size: 0.8em;
    color: ${colors.grey};
  }

  .nav-link {
    cursor: pointer;
    transition: color 0.5s ease;
  }

  .nav-link:hover {
    color: ${colors.black};
  }

  .nav-link.active {
    font-weight: 700;
    color: ${colors.black};
  }
`;

export default styles;
