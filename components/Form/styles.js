import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    position: relative;
    margin-bottom: ${rhythm.vt * 2}px;
  }

  input,
  textarea,
  label {
    font-size: 1em;
    line-height: 1.5em;
    color: ${colors.black};
  }

  input[type='date'] {
    font-family: Arial;
  }

  select {
    font-family: 'Arial';
    font-size: 0.8em;
    line-height: 1.25em;
    color: ${colors.black};
  }

  label {
    position: absolute;
    top: 10px;
    left: ${rhythm.hz / 4}px;
    transition: all 0.5s ease;
    padding: 0 ${rhythm.hz / 4}px;
    background-color: ${colors.white};
    color: ${colors.grey};
    cursor: text;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid ${colors.black};
    outline: none;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
    transition: border-color 0.5s ease;
  }

  input:focus,
  textarea:focus {
    border-color: ${colors.accent2};
  }

  input:focus ~ label,
  input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -${rhythm.vt / 2}px;
    font-size: 0.8em;
  }

  input:valid ~ label {
    color: ${colors.accent2};
  }

  .select-label {
    position: static;
    top: auto;
    left: auto;
    padding: 0;
    margin-right: ${rhythm.hz}px;
    color: ${colors.black};
  }

  input[type='file'] {
    line-height: 1em;
  }
`;

export default styles;
