import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .page-wrapper {
    padding-top: ${rhythm.vt}px;
    height: 100%;
  }

  .page-container {
    max-width: 720px;
    height: 100%;
  }
`;

export default styles;
