import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';

import styles from './styles';

const Page = ({ children }) => {
  return (
    <div className="wrapper">
      <Media query={{ maxWidth: 720 }}>
        {(matches) => (
          <div className={`container ${matches ? 'mobile' : 'desktop'}`}>{children}</div>
        )}
      </Media>

      <style jsx>{styles}</style>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};
Page.defaultProps = {};

export default Page;
