import React from 'react';
import App, { Container } from 'next/app';

import globalStyles from '../static/styles/global';

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
        <style jsx global>
          {globalStyles}
        </style>

        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MerjApp;
