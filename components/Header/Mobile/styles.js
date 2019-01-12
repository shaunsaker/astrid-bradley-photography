import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px 24px;
    min-height: 120px;
    background-color: ${colors.white};
  }

  .buttonContainer {
    align-items: flex-start;
    margin-bottom: 16px;
  }

  button {
  }
`;

export default styles;
