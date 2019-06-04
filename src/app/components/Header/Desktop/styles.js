import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .logo-container {
    padding: 0 ${rhythm.hz}px;
  }

  ul {
    justify-content: space-between;
    margin-top: ${rhythm.vt * 4}px;
    padding: 0 ${rhythm.hz * 2}px;
  }

  .nav-link {
    font-size: 14px;
    color: ${colors.grey};
  }

  .nav-link {
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
