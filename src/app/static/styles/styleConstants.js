const colors = {
  black: '#000000',
  transBlack: 'rgba(0, 0, 0, 0.7)',
  white: '#FFFFFF',
  transWhite: 'rgba(255, 255, 255, 0.8)',
  grey: '#737373',
  lightGrey: '#CCCCCC',
  accent1: '#BB7D46',
  accent2: '#61A1FF',
  green: '#4caf50',
  red: '#f44336',
};

const rhythm = {
  vt: 16,
  hz: 24,
};

const sizes = {
  maxScreenWidth: 720, // 768 - rhythm.hz * 2
  photoHeight: 330,
  button: {
    small: 20,
    default: 50,
  },
  spinner: {
    small: 8,
    default: 16,
  },
};

const styleConstants = {
  colors,
  rhythm,
  sizes,
};

export { colors, rhythm, sizes };

export default styleConstants;
