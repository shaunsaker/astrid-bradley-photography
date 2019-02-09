import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  .container {
  }

  .image {
    height: 100%;
    object-fit: cover;
  }

  .loading-container {
    border: 1px solid ${colors.lightGrey};
  }
`;

export default styles;
