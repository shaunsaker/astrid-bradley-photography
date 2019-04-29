import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import ShootSection from './ShootSection';
import ContactButton from '../../components/ContactButton';

const Shoot = ({ shoot }) => {
  const title = shoot.name;
  const description = `${shoot.name} on the ${shoot.date} at ${shoot.location}`;
  const shootComponent = <ShootSection shoot={shoot} />;

  return (
    <Layout title={title} description={description}>
      {shootComponent}

      <ContactButton />
    </Layout>
  );
};

Shoot.propTypes = {
  // getInitialProps
  shoot: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }),
};
Shoot.defaultProps = {};

export default Shoot;
