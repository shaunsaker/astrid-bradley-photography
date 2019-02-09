import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    width: 100%;
    position: relative;
    height: ${sizes.photoHeight}px;
    max-height: ${sizes.photoHeight}px;
    margin-bottom: ${rhythm.hz}px;
  }

  .container.thumbnail {
    height: ${sizes.thumbnailHeight}px;
    max-height: ${sizes.thumbnailHeight}px;
  }
`;

export default styles;
