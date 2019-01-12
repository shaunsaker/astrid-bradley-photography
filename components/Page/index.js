import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return (
    <div className="page-wrapper">
      <div className="page-container flex">{children}</div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};
Page.defaultProps = {};

export default Page;
