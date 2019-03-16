import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Head from '../Head';

const Page = ({ title, description, children }) => {
  return (
    <Fragment>
      <Head title={title} description={description} />

      <div className="page-wrapper">
        <div className="page-container flex">{children}</div>
      </div>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
Page.defaultProps = {};

export default Page;
