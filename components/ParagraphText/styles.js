import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  p {
    font-size: 1em;
    line-height: 1.5em;
    color: ${colors.black};
  }

  .white {
    color: ${colors.white};
  }
`;

export default styles;
