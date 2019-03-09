import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Page = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-container flex">{children}</div>

      <style jsx>{styles}</style>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};
Page.defaultProps = {};

export default Page;
