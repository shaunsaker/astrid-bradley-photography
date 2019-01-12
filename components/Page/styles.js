import css from 'styled-jsx/css';

const styles = css`
  .wrapper {
    height: 100vh;
    align-items: center;
  }

  .container {
    max-width: 720px;
  }

  .desktop {
    padding: 64px 24px 0;
  }

  .mobile {
    padding: 120px 12px 0; /* 120 = header height */
    align-self: stretch;
  }
`;

export default styles;
