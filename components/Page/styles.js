import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .page-wrapper {
    height: 100%;
  }

  .page-container {
    align-self: center;
    max-width: ${sizes.maxScreenWidth}px;
    width: 100%;
    height: 100%;
    padding: 0px ${rhythm.hz}px 0;
    padding-top: ${105 + rhythm.vt}px; /* header height + spacing */
  }

  @media (min-width: 544px) {
    .page-container {
      padding-top: ${134 + rhythm.vt}px; /* header height + spacing */
    }
  }

  @media (min-width: 768px) {
    .page-container {
      padding: 0;
      padding-top: ${rhythm.vt * 4}px;
    }
  }
`;

export default styles;
