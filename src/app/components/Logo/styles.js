import css from 'styled-jsx/css'; // eslint-disable-line

const styles = css`
  img {
    align-self: center;
    width: 272px; /* the width at 320px wide */
  }

  @media (min-width: 544px) {
    img {
      width: 495px; /* the width at 544px wide */
    }
  }

  @media (min-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

export default styles;
