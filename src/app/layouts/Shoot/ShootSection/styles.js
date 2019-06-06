import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
  }

  .images-container {
    justify-content: space-between;
  }

  .image-container {
    margin-bottom: ${rhythm.vt}px;
  }

  .vendors-container {
    margin-top: ${rhythm.vt}px;
  }

  .vendor-row-container {
    flex-direction: row;
    align-items: center;
  }

  a {
    margin-left: ${rhythm.hz / 4}px;
    color: ${colors.grey};
    transition: color 0.5s ease;
  }

  a:hover {
    color: ${colors.black};
  }
`;

export default styles;
