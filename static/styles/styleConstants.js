const colors = {
  black: '#000000',
  transBlack: 'rgba(0, 0, 0, 0.8)',
  white: '#FFFFFF',
  grey: '#9C9C9C',
  lightGrey: '#CCCCCC',
  accent: '#BB7D46',
};

const rhythm = {
  vt: 16,
  hz: 24,
};

// Calculate the grid size for 3 columns
const columns = 3;
const third = (720 - 2 * rhythm.hz) / columns;

const grid = {
  third,
};

const styleConstants = {
  colors,
  grid,
  rhythm,
};

export { colors, grid, rhythm };

export default styleConstants;
