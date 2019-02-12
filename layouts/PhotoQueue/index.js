import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sortArrayOfObjectsByKey } from '../../utils';

import styles from './styles';

import Layout from '../../components/Layout';
import HeadingText from '../../components/HeadingText';
import ShootItem from '../../components/ShootItem';
import ContactButton from '../../components/ContactButton';

const PhotoQueue = ({ shoots }) => {
  // Filter out the archived shoots
  // Sort by date (earliest to latest)
  const relevantShoots = sortArrayOfObjectsByKey(shoots.filter((shoot) => !shoot.archived), 'date');

  // Get the incomplete shoots (the ones without download urls)
  const incompleteShoots = relevantShoots.filter((shoot) => !shoot.download_url);
  const inProgressShoot = incompleteShoots[0];

  // Remove the first incomplete shoot (we have it as in progress already)
  incompleteShoots.splice(0, 1);

  // Get the completed shoots (the ones with download urls)
  // Reverse the array items so that we show the latest first
  const completedShoots = relevantShoots.filter((shoot) => shoot.download_url).reverse();

  return (
    <Layout title="Photo Queue">
      <section>
        <HeadingText>In Progress</HeadingText>

        <div className="spacer-vt" />

        <ShootItem shoot={inProgressShoot} />
      </section>

      <section>
        <HeadingText>Upcoming</HeadingText>

        <div className="spacer-vt" />

        {incompleteShoots.map((shoot) => {
          const { id } = shoot;

          return (
            <Fragment key={id}>
              <ShootItem shoot={shoot} />

              <div className="spacer-vt" />
            </Fragment>
          );
        })}
      </section>

      <section>
        <HeadingText>Completed</HeadingText>

        <div className="spacer-vt" />

        {completedShoots.map((shoot) => {
          const { id } = shoot;

          return (
            <Fragment key={id}>
              <ShootItem shoot={shoot} />

              <div className="spacer-vt" />
            </Fragment>
          );
        })}
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
