import css from 'styled-jsx/css'; // eslint-disable-line

const styles = css`
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
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
`;

export default styles;
