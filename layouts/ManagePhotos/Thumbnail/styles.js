import css from 'styled-jsx/css'; // eslint-disable-line

const ICON_BUTTON_SIZE = 20;

const styles = css`
  .container {
    width: 100%;
  }

  .thumbnail {
    object-fit: cover;
    height: 100%;
  }

  .icon-button-container {
    position: absolute;
    top: ${ICON_BUTTON_SIZE / -2}px;
    right: ${ICON_BUTTON_SIZE / -2}px;
  }

  @media (min-width: 480px) {
    .container {
      width: 23.3%; /* to taste */
    }
  }
`;

export default styles;
