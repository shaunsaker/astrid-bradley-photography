import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from './styleConstants';

const styles = css.global`
* {
  box-sizing: border-box;
}

body,
html {
  max-height: 100%;
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
}

div, ul {
  display: flex;
  flex-direction: column;
}

section {
  margin-bottom: ${rhythm.vt * 4}px;
}

ul {
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
}

.page-wrapper {

}

.page-container {
  max-width: 720px;
}

.flex {
  display: flex;
  flex-direction: column;
}

.row {
  flex-direction: row;
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
  transition: all 1s ease;
}

.shadow-hover:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.shadow-hover-lg:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.spacer-hz {
  min-width: ${rhythm.hz / 2}px;
}

.spacer-vt {
  min-height: ${rhythm.vt}px;
  width: 100%;
}

.hidden {
  display: none;
}

.scale {
  transform: scale(75);
  box-shadow: none;
}

@font-face {
  font-family: 'Futura';
  src: url('/static/fonts/Futura.ttf') format('truetype');
  font-weight: 400;
  font-style: medium;
  font-display: swap;
}

h1,  h3, p {
  margin: 0;
}

h1 {
  margin-bottom: ${rhythm.vt * 2}px;
}

h1, button {
  font-family: 'Futura', sans-serif;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 1em;
  color: ${colors.black};
}

h3 {
  font-size: 1em;
  color: ${colors.black};
}

p, input, textarea, label {
  font-size: 1em;
  line-height: 1.5em;
  color: ${colors.black};
}

input[type=date] {
  font-family: Arial;
}

small {
  font-size: 0.8em;
  line-height: 1.25em;
  color: ${colors.black};
}

.nav-link {
  font-size: 0.8em;
  color: ${colors.grey};
}

.link {
  font-size: 1em;
  color: ${colors.black};
  text-decoration: underline;
}

.nav-link, .link {
  cursor: pointer;
  transition: color 1s ease;
}

.nav-link:hover, .link:hover {
  color: ${colors.black};
}

.nav-link.active, .link.active {
  font-weight: 700;
  color: ${colors.black};
}

.button {
  background-color: rgba(0, 0, 0, 0.67);
  padding: ${rhythm.vt}px ${rhythm.hz}px;
  color: ${colors.white};
}
`;

export default styles;
