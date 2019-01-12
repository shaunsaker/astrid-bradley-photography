import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../../static/styles/styleConstants';

const styles = css`
  ul {
    background-color: ${colors.white};
    padding: 16px 12px 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-top: 16px;

    @keyframes grow {
      from {
        opacity: 0;
        max-height: 0;
      }
      to {
        opacity: 1;
        max-height: 500px; /* anything value bigger than the menu */
      }
    }

    animation: grow 0.5s ease;
  }

  li {
    margin-bottom: 16px;
    text-align: center;
  }
`;

export default styles;
