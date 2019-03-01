import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import Layout from '../../components/Layout';
import ShootSection from './ShootSection';
import LoadingSection from '../../components/LoadingSection';
import ContactButton from '../../components/ContactButton';

const Shoot = ({ router, shoots }) => {
  const shootID = router.query.id;
  const shoot = shoots.filter((item) => item.id === shootID)[0];
  const name = shoot ? shoot.name : null;
  const shootComponent = shoot ? <ShootSection shoot={shoot} /> : <LoadingSection />;

  return (
    <Layout title={name}>
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
