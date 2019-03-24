import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { business } from '../../config';

import Layout from '../../components/Layout';
import ShootSection from './ShootSection';
import LoadingSection from '../../components/LoadingSection';
import ContactButton from '../../components/ContactButton';

const Shoot = ({ router, shoots }) => {
  const shootID = router.query.id;
  const shoot = shoots.filter((item) => item.id === shootID)[0];
  let title;
  let description;
  let shootComponent = <LoadingSection />;

  if (shoot) {
    title = `${shoot.name} | ${business.name}`;
    description = `${shoot.name} on the ${shoot.date} at ${shoot.location}`;
    shootComponent = <ShootSection shoot={shoot} />;
  }

  return (
    <Layout title={title} description={description}>
      {shootComponent}

      <ContactButton />
    </Layout>
  );
};

Shoot.propTypes = {
  // connect
  shoots: PropTypes.arrayOf(PropTypes.shape({})),

  // withRouter
  router: PropTypes.shape({ query: PropTypes.shape({ id: PropTypes.string }) }),
};
Shoot.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withRouter(connect(mapStateToProps)(Shoot));
