import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getElapsedDays, getFutureTime, getPrettyDate } from '../../utils';

import Layout from '../../components/Layout';
import Springboard from '../../components/Springboard';
import ParagraphText from '../../components/ParagraphText';
import ContactButton from '../../components/ContactButton';

const Download = ({ shootID, shoots }) => {
  const shoot = shoots.filter((item) => item.id === shootID)[0];
  const { name, cover_photo, download_url, date_modified } = shoot;
  const title = `DOWNLOAD: ${name}`;
  let mainComponent;

  if (!download_url) {
    // Link is not ready
    mainComponent = <ParagraphText>This shoot is not ready for download.</ParagraphText>;
  } else {
    // Link is ready
    // Check if it is still valid
    const elapsedDays = getElapsedDays(date_modified);
    const expiryDate = getPrettyDate(getFutureTime(date_modified, 30));
    const isLinkValid = elapsedDays <= 30;

    if (isLinkValid) {
      // Link is valid
      mainComponent = (
        <Fragment>
          <Springboard
            image={cover_photo}
            text="Download Shoot"
            action={{ link: { href: download_url, target: '_blank' } }}
          />

          <div className="spacer-vt" />

          <ParagraphText>
            This shoot&apos;s download link is available until <b>{expiryDate}</b>.
          </ParagraphText>
        </Fragment>
      );
    } else {
      // Link is not valid
      mainComponent = (
        <ParagraphText>
          This shoot&apos;s download link expired on <b>{expiryDate}</b>.
        </ParagraphText>
      );
    }
  }

  return (
    <Layout title={title}>
      <section>{mainComponent}</section>

      <ContactButton />
    </Layout>
  );
};

Download.propTypes = {
  shootID: PropTypes.string,
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
Download.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default connect(mapStateToProps)(Download);
