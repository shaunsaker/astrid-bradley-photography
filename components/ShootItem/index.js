import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { getFutureTime, getPrettyDate } from '../../utils';
import { colors } from '../../static/styles/styleConstants';

import styles from './styles';

import Card from '../Card';
import ParagraphText from '../ParagraphText';
import SmallText from '../SmallText';
import Icon from '../Icon';

const ShootItem = ({ shoot, secondary, admin }) => {
  const { name, location, date, photos, download_url, delivered, archived, id } = shoot;
  const prettyDate = getPrettyDate(date);

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

  // IF on the admin page
  // THEN go to the relevant edit shoot page
  // ELSE
  // THEN go to the relevant shoot page
  const href = admin ? `/admin/shoots/edit?id=${id}` : photos ? `/shoots/shoot?id=${id}` : null;
  const action = href ? { nextLink: { href } } : undefined;

  return (
    <Card action={action} secondary={secondary}>
      <div className="container row">
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
          <Icon
            name="check-circle"
            size={18}
            color={download_url ? colors.green : colors.lightGrey}
          />

          <div className="spacer-hz small" />

          <Icon name="send" size={18} color={delivered ? colors.green : colors.lightGrey} />

          {archiveComponent}
        </div>
      </div>
      <style jsx>{styles}</style>
    </Card>
  );
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
