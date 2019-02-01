import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { colors } from '../../static/styles/styleConstants';
import { getPrettyDate } from '../../utils';

import styles from './styles';

import ParagraphText from '../ParagraphText';
import SmallText from '../SmallText';
import Icon from '../Icon';

const ShootItem = ({ shoot }) => {
  const { name, id, date, archived, photos } = shoot;
  const prettyDate = getPrettyDate(date);
  const href = `/admin/edit-shoot?id=${id}`;

  return (
    <Link href={href}>
      <button type="button" className="container flex row shadow-sm shadow-hover xs-wrap">
        <div className="text-container">
          <ParagraphText>
            <b>{name}</b>
          </ParagraphText>

          <div className="spacer-vt" />

          <SmallText className="text">{prettyDate}</SmallText>
        </div>

        <div className="spacer-hz" />

        <div className="row">
          <Icon name="photo" size={18} color={photos ? colors.black : colors.lightGrey} />

          <div className="spacer-hz small" />

          <Icon name="archive" size={18} color={archived ? colors.black : colors.lightGrey} />
        </div>

        <style jsx>{styles}</style>
      </button>
    </Link>
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
