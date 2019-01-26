import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from './styleConstants';

const styles = css.global`
// RESETS
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

// HELPERS
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
  min-width: ${rhythm.hz}px;
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

.relative {
  position: relative;
}

// TYPOGRAPHY
@font-face {
  font-family: 'Futura';
  src: url('/static/fonts/Futura.ttf') format('truetype');
  font-weight: 400;
  font-style: medium;
  font-display: swap;
}

h1, h2, h3, p {
  margin: 0;
}

h1 {
  margin-bottom: ${rhythm.vt * 2}px;
}

h1, h2, button {
  font-family: 'Futura', sans-serif;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 1.25em;
  color: ${colors.black};
}

h2, button {
  font-size: 0.8em;
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

// BUTTONS AND LINKS
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

// FORMS
fieldset {
  border: none;
  padding: 0;
  margin: 0;
  position: relative;
  margin-bottom: ${rhythm.vt * 2}px;
}

label {
  position: absolute;
  top: 10px;
  left: ${rhythm.hz / 4}px;
  transition: all 0.5s ease;
  padding: 0 ${rhythm.hz / 4}px;
  background-color: ${colors.white};
  color: ${colors.grey};
}

input,
textarea {
  width: 100%;
  border: 1px solid ${colors.black};
  outline: none;
  padding: ${rhythm.vt / 2}px ${rhythm.hz / 2}px;
  transition: border-color 1s ease;
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

// RESPONSIVENESS
@media screen and (max-width: 543px) {
  .xs-wrap {
    flex-wrap: wrap;
  }
  .hidden-xs-down {
    display: none;
  }
}

@media screen and (min-width: 544px) {
  .hidden-xs-up {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .desktop {
    display: none;
  }
  .page-container {
    padding: 120px 24px 0;
    align-self: stretch;
  }
}

@media screen and (min-width: 768px) {
  .mobile {
      display: none;
  }
  .page-container {
    padding: 64px 24px 0;
    align-self: center;
  }
}

`;

export default styles;
