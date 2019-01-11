import css from 'styled-jsx/css';

import { colors } from '../../../../static/styles/styleConstants';

const styles = css`
  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${colors.white};
    padding: 32px 12px 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    z-index: 1;
    overflow: hidden;
  }

  .buttonContainer {
    align-items: flex-end;
    margin-bottom: 32px;
  }

  ul {
    margin-top: 32px;

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
    font-size: 1em;
    color: ${colors.grey};
    cursor: pointer;
    margin-bottom: 16px;
    text-align: center;
  }

  li.active {
    font-weight: 700;
    color: ${colors.black};
  }
`;

export default styles;
