import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Layout from '../../components/Layout';
import ContactButton from '../../components/ContactButton';

const PhotoQueue = () => {
  return (
    <Layout title="Photo Queue">
      <ContactButton />

      <style jsx>{styles}</style>
    </Layout>
  );
};

PhotoQueue.propTypes = {};
PhotoQueue.defaultProps = {};

export default PhotoQueue;
