import { global } from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = global`
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    position: relative;
    margin-bottom: ${rhythm.vt * 2}px;
  }

  fieldset.group {
    margin-bottom: 0;
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

  input,
  textarea {
    width: 100%;
    border: 1px solid ${colors.black};
    outline: none;
    padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
    transition: border-color 0.5s ease;
  }

  input[type='checkbox'] {
    width: auto;
  }

  input:focus,
  textarea:focus {
    border-color: ${colors.accent1};
  }

  input[type='file'] {
    line-height: 1em;
  }

  label {
    transition: all 0.5s ease;
    color: ${colors.black};
  }

  label.static {
    display: block;
    margin-bottom: ${rhythm.vt}px;
  }

  label.inline-left {
    margin-right: ${rhythm.hz}px;
  }

  label.inline-right {
    margin-left: ${rhythm.hz / 2}px;
  }

  label.absolute {
    position: absolute;
    top: 10px;
    left: ${rhythm.hz / 4}px;
    padding: 0 ${rhythm.hz / 4}px;
    background-color: ${colors.white};
    cursor: text;
    color: ${colors.grey};
  }

  input:focus + label:not(.inline-right),
  input:valid + label:not(.inline-right),
  textarea:focus + label:not(.inline-right),
  textarea:valid + label:not(.inline-right) {
    top: -${rhythm.vt / 2}px;
    font-size: 0.8em;
  }

  input:valid + label:not(.inline-right) {
    color: ${colors.accent1};
  }
`;

export default styles;
