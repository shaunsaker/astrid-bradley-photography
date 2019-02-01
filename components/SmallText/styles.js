import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  small {
    font-size: 0.8em;
    line-height: 1.25em;
    color: ${colors.grey};
  }

  .white {
    color: ${colors.white};
  }
`;

export default styles;
