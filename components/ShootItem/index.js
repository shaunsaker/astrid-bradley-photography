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
  const { name, location, photos, date, download_url, delivered, archived, id } = shoot;
  const prettyDate = getPrettyDate(date);
  const isButton = photos || admin;

  // GET the estimated delivery date 10 weeks from the shoot date
  const estimatedDeliveryDate = getPrettyDate(getFutureTime(date, 70));

  // IF admin
  // THEN display the archive icon component
  const archiveComponent = admin && (
    <Fragment>
      <div className="spacer-hz small" />

      <Icon name="archive" size={18} color={archived ? colors.green : colors.lightGrey} />
    </Fragment>
  );

  const contentComponent = (
    <div
      role={isButton && 'button'}
      tabIndex={isButton && 0}
      className={`container flex row ${
        isButton ? 'shadow-sm shadow-hover clickable' : ''
      } xs-wrap ${secondary && 'secondary'}`}
    >
      <div className="text-container">
        <ParagraphText white={secondary}>
          <b>{name}</b> - {location}
        </ParagraphText>

        <div className="spacer-vt" />

        <SmallText className="text">
          {prettyDate} (Est. delivery: {estimatedDeliveryDate})
        </SmallText>
      </div>

      <div className="spacer-hz" />

      <div className="row">
        <Icon name="check" size={18} color={download_url ? colors.green : colors.lightGrey} />

        <div className="spacer-hz small" />

        <Icon name="send" size={18} color={delivered ? colors.green : colors.lightGrey} />

        {archiveComponent}
      </div>

      <style jsx>{styles}</style>
    </div>
  );

  if (disabled || !isButton) {
    return contentComponent;
  } else {
    // IF on the admin page
    // THEN go to the relevant edit shoot page
    // ELSE
    // THEN go to the relevant shoot page
    const href = admin ? `/admin/shoots/edit?id=${id}` : `/shoots/shoot?id=${id}`;

    return <Link href={href}>{contentComponent}</Link>;
  }
};

ShootItem.propTypes = {
  shoot: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.string,
  }),
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  admin: PropTypes.bool,
};
ShootItem.defaultProps = {};

export default ShootItem;
