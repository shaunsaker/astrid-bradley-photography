import css from 'styled-jsx/css'; // eslint-disable-line

import { colors, rhythm } from '../../static/styles/styleConstants';

const styles = css`
  h1 {
    font-family: 'Futura', sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.black};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${colors.lightGrey};
    padding: ${rhythm.vt}px 0;
    margin-bottom: ${rhythm.vt * 2}px;
  }
`;

export default styles;
