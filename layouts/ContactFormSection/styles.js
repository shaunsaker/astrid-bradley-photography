import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../static/styles/styleConstants';

const styles = css`
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    position: relative;
    margin-bottom: 32px;
  }

  label {
    position: absolute;
    top: 10px;
    left: 6px;
    transition: all 0.5s ease;
    padding: 0 6px;
    background-color: ${colors.white};
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid ${colors.black};
    outline: none;
    padding: 8px 12px;
    transition: border-color 1s ease;
  }

  input:focus,
  textarea:focus {
    border-color: ${colors.accent2};
  }

  input:focus ~ label,
  input:valid ~ label,
  input:invalid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label,
  textarea:invalid ~ label {
    top: -8px;
    font-size: 0.8em;
    color: ${colors.grey};
  }

  input:valid ~ label {
    color: ${colors.accent2};
  }
`;

export default styles;
