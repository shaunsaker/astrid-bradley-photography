import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from './styleConstants';

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
  margin-bottom: 32px;
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
  flex: 1;
}

.row {
  flex-direction: row;
}

.shadow-sm {
  transition: all 0.5s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.shadow-sm:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.shadow-md {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.shadow-lg {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

@font-face {
  font-family: 'Futura';
  src: url('/static/fonts/Futura.ttf') format('truetype');
  font-weight: 500;
  font-style: medium;
  font-display: swap;
}

h1, h2, p {
  margin: 0;
}

h1 {
  font-size: 1.5em;
  color: ${colors.black};
  margin: 16px 0;
}

h2 {
  font-size: 1.25em;
  color: ${colors.black};
  margin: 16px 0;
}

h1, h2 {
  font-family: 'Futura', sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
}

p {
  font-size: 1em;
  line-height: 1.5em;
  color: ${colors.black};
  margin-bottom: 16px;
}

small {
  font-size: 0.8em;
  line-height: 1.25em;
  color: ${colors.grey};
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
  transition: color 0.5s ease;
}

.nav-link:hover, .link:hover {
  color: ${colors.black};
}

.nav-link.active, .link.active {
  font-weight: 700;
  color: ${colors.black};
}
`;

export default styles;
