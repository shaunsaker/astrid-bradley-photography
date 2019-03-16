import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HeadComponent = ({ title, description }) => {
  return (
    <Head>
      <title key="title">{title}</title>

      <title key="description">{description}</title>

      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
      />
    </Head>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
HeadComponent.defaultProps = {
  title: 'Astrid Bradley Photography',
  description: 'Wedding and Lifestyle Photographer based in Cape Town',
};

export default HeadComponent;
