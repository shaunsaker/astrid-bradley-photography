import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import ShootSection from './ShootSection';
import LoadingSection from '../../components/LoadingSection';
import ContactButton from '../../components/ContactButton';

const Shoot = ({ shootID, shoots }) => {
  const shoot = shoots.filter((item) => item.id === shootID)[0];
  const { name } = shoot;
  const shootComponent = shoot ? <ShootSection shoot={shoot} /> : <LoadingSection />;

  return (
    <Layout title={name}>
      <main>{shootComponent}</main>

      <ContactButton />
    </Layout>
  );
};

Shoot.propTypes = {
  shootID: PropTypes.string,
  shoots: PropTypes.arrayOf(PropTypes.shape({})),
};
Shoot.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default connect(mapStateToProps)(Shoot);
