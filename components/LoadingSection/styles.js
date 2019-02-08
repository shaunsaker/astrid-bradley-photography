import css from 'styled-jsx/css'; // eslint-disable-line

const styles = css`
  .container {
    background-color: rgba(255, 255, 255, 0.33);
    z-index: 2;
    animation: fade-in 0.5s ease;

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .container.fixed {
    position: fixed;
  }
`;

export default styles;
