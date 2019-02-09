import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../static/styles/styleConstants';

const styles = css`
  .delete-button-container {
    position: absolute;
    top: -10px;
    right: -10px;
  }

  .add-button-container {
    position: absolute;
    top: 0;
    right: -${250 + rhythm.hz}px;
    bottom: 0;
    width: 250px;
  }

  /* TODO: Responsive styling */
`;

export default styles;
