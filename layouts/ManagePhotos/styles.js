import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    justify-content: space-between;
    align-items: stretch;
  }

  .thumbnail-container {
    width: 23.3%; /* to taste */
  }

  .thumbnail {
    object-fit: cover;
    height: 100%;
  }
`;

export default styles;
