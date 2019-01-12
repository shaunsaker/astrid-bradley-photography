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
    background-color: rgba(0, 0, 0, 0.33);
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: ${colors.white};
  }
`;

export default styles;
