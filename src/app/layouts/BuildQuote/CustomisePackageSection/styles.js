import css from 'styled-jsx/css'; // eslint-disable-line

import { rhythm } from '../../../static/styles/styleConstants';

const styles = css`
  .container {
    align-items: flex-start;
  }

  .products-container {
    align-self: stretch;
  }

  .product-container {
  }

  .product-qty-container {
    width: ${rhythm.hz}px;
    text-align: center;
  }

  .product-name-container {
    flex: 1;
  }
`;

export default styles;
