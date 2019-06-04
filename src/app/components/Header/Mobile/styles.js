import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    background-color: ${colors.white};
    z-index: 2;
    display: flex;
    flex-direction: row;
  }

  .logo-container {
    margin-right: ${rhythm.hz}px;
  }

  ul {
    padding: ${rhythm.vt}px ${rhythm.hz}px;
    align-items: flex-start;
    min-width: 240px;
  }

  li {
    margin-bottom: ${rhythm.vt}px;
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
