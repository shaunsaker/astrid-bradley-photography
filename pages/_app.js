import React from 'react';
import App, { Container } from 'next/app';

import globalStyles from '../static/styles/global';
import '../static/styles/responsive.scss';

import Head from '../components/Head';
import PageLoader from '../components/PageLoader';

export class MerjApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head />

        <style jsx global>
          {globalStyles}
        </style>

        <Component {...pageProps} />

        <PageLoader />
      </Container>
    );
  }
}

export default MerjApp;
