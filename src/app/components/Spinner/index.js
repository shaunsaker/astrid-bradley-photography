import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

import { colors, sizes } from '../../static/styles/styleConstants';

const Spinner = ({ small }) => {
  return (
    <div style={{ transform: 'rotate(90deg)' }}>
      <BeatLoader
        size={small ? sizes.spinner.small : sizes.spinner.default}
        loading
        color={colors.black}
      />
    </div>
  );
};

Spinner.propTypes = {
  small: PropTypes.bool,
};
Spinner.defaultProps = {};

export default Spinner;
