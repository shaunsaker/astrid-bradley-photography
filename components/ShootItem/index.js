import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import { getPrettyDate } from '../../utils';

import styles from './styles';

import Icon from '../Icon';

const ShootItem = ({ shoot }) => {
  const { name, id, date } = shoot;
  const prettyDate = getPrettyDate(date);

  return (
    <button type="button" className="container flex row shadow-sm shadow-hover xs-wrap">
      <div className="text-container">
        <h3 className="text">{name}</h3>

        <div className="spacer-vt" />

        <small className="text">{prettyDate}</small>
      </div>

      <div className="spacer-hz" />

      <Icon name="edit" size={18} color={colors.lightGrey} />

      <style jsx>{styles}</style>
    </button>
  );
};

ShootItem.propTypes = {
  shoot: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.number,
  }),
};
ShootItem.defaultProps = {};

export default ShootItem;
