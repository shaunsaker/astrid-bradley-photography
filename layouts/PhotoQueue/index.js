import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import HeadingText from '../../components/HeadingText';
import ContactButton from '../../components/ContactButton';

const PhotoQueue = ({ shoots }) => {
  console.log(shoots);

  // TODO: Don't display archived shoots

  /*
    Each shoot item has states:

    - In progress
      -- Estimated delivery (next upcoming without download URL)
    - Completed
      -- Job Complete (Has download URL)
      -- Waiting delivery (Delivered on Edit Shoot)
    - Upcoming
      -- Date of shoot (no download url)
  */

  // In progress
  // Completed (for year)
  // Job complete
  // Waiting delivery
  // Upcoming

  /*
    TITLE
    SHOOT DATE
    ESTIMATED DELIVERY DATE
    COMPLETE (has download url)
    DELIVERED (is delivered)
    ARCHIVED (admin only - is archived)

    - TODO: with labels
  */

  return (
    <Layout title="Photo Queue">
      <section>
        <HeadingText>In Progress</HeadingText>
      </section>

      <section>
        <HeadingText>Upcoming</HeadingText>
      </section>

      <section>
        <HeadingText>Completed</HeadingText>
      </section>

      <ContactButton />

      <style jsx>{styles}</style>
    </Layout>
  );
};

PhotoQueue.propTypes = {
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
PhotoQueue.defaultProps = {};

const mapStateToProps = (state) => {
  const { shoots } = state;

  return {
    shoots,
  };
};

export default connect(mapStateToProps)(PhotoQueue);
