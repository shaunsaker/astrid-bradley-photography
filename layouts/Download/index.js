import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import Springboard from '../../components/Springboard';

const Download = ({ shootID, shoots }) => {
  const shoot = shoots.filter((item) => item.id === shootID)[0];
  const { name, cover_photo } = shoot;
  const title = `DOWNLOAD: ${name}`;

  return (
    <Layout title={title}>
      <section>
        <Springboard
          image={cover_photo}
          text="Download Shoot"
          action={{
            handleClick: () => console.log('Test'),
          }}
        />
      </section>
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
