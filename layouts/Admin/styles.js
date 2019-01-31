import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .category-container {
    margin-top: ${rhythm.vt}px;
  }

  @media (min-width: 767px) {
    .category-container {
      margin-top: 0;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      justify-content: center;
    }
  }
`;

export default styles;
