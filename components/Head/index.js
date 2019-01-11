import React from 'react';
import Head from 'next/head';

const HeadComponent = () => {
  return (
    <Head>
      <title key="title">Astrid Bradley Photography</title>

      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
      />
    </Head>
  );
};

HeadComponent.propTypes = {};
HeadComponent.defaultProps = {};

export default HeadComponent;
