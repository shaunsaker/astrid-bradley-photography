import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  p {
    font-size: 16px;
    line-height: 24px;
    color: ${colors.black};
  }

  .white {
    color: ${colors.white};
  }
`;

export default styles;
