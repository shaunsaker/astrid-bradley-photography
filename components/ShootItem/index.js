import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { getFutureTime, getPrettyDate } from '../../utils';
import { colors } from '../../static/styles/styleConstants';

import styles from './styles';

import ParagraphText from '../ParagraphText';
import SmallText from '../SmallText';
import Icon from '../Icon';

const ShootItem = ({ shoot, secondary, disabled, admin }) => {
  const { name, id, date, download_url, delivered, archived } = shoot;
  const prettyDate = getPrettyDate(date);
  const href = `/admin/edit-shoot?id=${id}`;
  const estimatedDeliveryDate = getPrettyDate(getFutureTime(date, 70)); // 10 weeks
  const archiveComponent = admin && (
    <Fragment>
      <div className="spacer-hz small" />

      <Icon name="archive" size={18} color={archived ? colors.black : colors.lightGrey} />
    </Fragment>
  );
  const contentComponent = (
    <div
      role="button"
      tabIndex={0}
      className={`container flex row shadow-sm shadow-hover xs-wrap ${secondary && 'secondary'}`}
    >
      <div className="text-container">
        <ParagraphText white={secondary}>
          <b>{name}</b>
        </ParagraphText>

        <div className="spacer-vt" />

        <SmallText className="text">
          {prettyDate} (Est. delivery: {estimatedDeliveryDate})
        </SmallText>
      </div>

      <div className="spacer-hz" />

      <div className="row">
        <Icon name="check" size={18} color={download_url ? colors.black : colors.lightGrey} />

        <div className="spacer-hz small" />

        <Icon name="send" size={18} color={delivered ? colors.black : colors.lightGrey} />

        {archiveComponent}
      </div>

      <style jsx>{styles}</style>
    </div>
  );

  if (disabled) {
    return contentComponent;
  }

  return <Link href={href}>{contentComponent}</Link>;
};

ShootItem.propTypes = {
  shoot: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.number,
  }),
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  admin: PropTypes.bool,
};
ShootItem.defaultProps = {};

export default ShootItem;
