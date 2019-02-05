import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Page from '../Page';
import Header from '../Header';
import TitleText from '../TitleText';
import Footer from '../Footer';

const Layout = ({ title, children }) => {
  const titleTextComponent = title && <TitleText>{title}</TitleText>;

  return (
    <Page>
      <Header />

      <div className="spacer-vt large hidden-md-down" />

      {titleTextComponent}

      <main>{children}</main>

      <Footer />

      <style jsx>{styles}</style>
    </Page>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
Layout.defaultProps = {};

export default Layout;
