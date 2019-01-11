import css from 'styled-jsx/css';

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
}
`;

export default styles;
