import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import globalStyles from '../static/styles/global';
import '../static/styles/responsive.scss';
import createStore from '../store';

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
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Head />

          <style jsx global>
            {globalStyles}
          </style>

          <Component {...pageProps} />

          <PageLoader />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MerjApp));
