import { StyleSheet } from '@react-pdf/renderer';

import { colors, rhythm } from '../../../../static/styles/styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: `${rhythm.vt * 2}px ${rhythm.hz * 2}px`,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: rhythm.vt * 2,
  },
  image: {
    width: 360,
  },
  section: {
    marginBottom: rhythm.vt,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  spacer: {
    width: rhythm.hz,
  },
  titleText: {
    fontSize: 20,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: colors.black,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    marginBottom: rhythm.vt,
  },
  headingText: {
    fontSize: 14,
    lineHeight: 1,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: colors.grey,
    marginBottom: rhythm.vt,
  },
  paragraphText: {
    fontSize: 12,
    lineHeight: 1.5,
    color: colors.black,
  },
  smallText: {
    fontSize: 10,
    color: colors.grey,
    marginBottom: rhythm.vt / 4,
  },
});

export default styles;
