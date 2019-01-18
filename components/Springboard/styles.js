import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    position: relative;
    cursor: pointer;
  }

  .container:hover {
  }

  img {
  }

  .text-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }
`;

export default styles;
