import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../../static/styles/styleConstants';

const styles = css`
  .container {
    background-color: ${colors.white};
    padding: 16px 12px 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-top: 16px;

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fade-in 0.5s ease;
  }

  li {
    margin-bottom: 16px;
    text-align: center;
  }
`;

export default styles;
