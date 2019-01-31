import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  h1 {
    font-family: 'Futura', sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1.25em;
    color: ${colors.black};
    border-width: 1px 0px;
    border-style: solid;
    border-color: ${colors.lightGrey};
    padding: ${rhythm.vt}px 0;
  }
`;

export default styles;
