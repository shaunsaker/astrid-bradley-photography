import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from './styleConstants';

const styles = css.global`
// RESETS
* {
  box-sizing: border-box;
}

main {
  flex: 1;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  color: ${colors.black};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

div, ul {
  display: flex;
  flex-direction: column;
}

section {
  margin-bottom: ${rhythm.vt * 4}px;
}

ul, figure {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
}

button:disabled {
  cursor: not-allowed;
}

button:focus, .button:focus, a:focus, input:focus, select:focus, div[role='button']:focus {
  outline: 2px solid ${colors.accent2};
}

// HELPERS
.flex {
  display: flex;
  flex-direction: column;
}

.row {
  flex-direction: row;
  align-items: center;
}

.wrap {
  flex-wrap: wrap;
}

.shadow-sm {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.shadow-md {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.shadow-lg {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.shadow-hover, .shadow-hover-lg {
  transition: box-shadow 0.5s ease;
}

.shadow-hover:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.shadow-hover-lg:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.clickable {
  cursor: pointer;
}

.spacer-hz {
  min-width: ${rhythm.hz}px;
}

.spacer-hz.small  {
  min-width: ${rhythm.hz / 2}px;
}

.spacer-vt {
  min-height: ${rhythm.vt}px;
  width: 100%;
}

.spacer-vt.small {
  min-height: ${rhythm.vt / 2}px;
  width: 100%;
}

.spacer-vt.large {
  min-height: ${rhythm.vt * 2}px;
}

.hidden {
  display: none;
}

.scale {
  transform: scale(75);
  box-shadow: none;
}

.relative {
  position: relative;
}

.abs-stretch {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

h1, h2, p {
  margin: 0;
}

// TYPOGRAPHY
@font-face {
  font-family: 'Futura';
  src: url('/static/fonts/Futura.ttf') format('truetype');
  font-weight: 400;
  font-style: medium;
  font-display: swap;
}

// RESPONSIVE HELPERS
@media (max-width: 543px) {
  .xs-wrap {
    flex-wrap: wrap;
  }
  .hidden-xs-down {
    display: none;
  }
}

@media (min-width: 544px) {
  .hidden-xs-up {
    display: none;
  }
}

@media (max-width: 767px) {
  .hidden-md-down {
    display: none;
  }
}

@media (min-width: 768px) {
  .hidden-md-up {
      display: none;
  }
}
`;

export default styles;
