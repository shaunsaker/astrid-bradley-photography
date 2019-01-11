import css from 'styled-jsx/css';

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
`;

export default styles;
