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
}

.page-wrapper {
  height: 100vh;
}

.page-container {
  max-width: 720px;
}

p {
  font-size: 1em;
  line-height: 1.5em;
  color: ${colors.grey};
}

.nav-link, .link {
  font-size: 1em;
  color: ${colors.grey};
  cursor: pointer;
  transition: color 0.5s ease;
}

.link {
  text-decoration: underline;
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
