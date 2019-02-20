import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .progress-item-container {
    margin-right: ${rhythm.hz}px;
    margin-bottom: ${rhythm.vt}px;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .progress-item-container.opacity {
    opacity: 0.33;
  }
`;

export default styles;
