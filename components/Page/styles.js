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

  @media screen and (max-width: 767px) {
    .page-container {
      padding: 120px 24px 0;
      align-self: stretch;
    }
  }

  @media screen and (min-width: 768px) {
    .page-container {
      padding: 64px 24px 0;
      align-self: center;
    }
  }
`;

export default styles;
