import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withRouter } from 'next/router';

import { routes, SEO } from '../../config';
import { colors } from '../../static/styles/styleConstants';

const primaryColor = colors.primary;
const defaultTitle = SEO.title;
const defaultDescription = SEO.description;

const HeadComponent = ({ router }) => {
  const { pathname } = router;
  const route = routes.filter((item) => item.href === pathname);
  const title = route.title || defaultTitle;
  const description = route.description || defaultDescription;

  return (
    <Head>
      {/* Title and description */}
      <title key="title">{title}</title>
      <meta key="description" name="Description" content={description} />

      {/* Responsiveness */}
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1.0"
      />

      {/* Favicons */}
      <link
        key="apple-touch-icon"
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/icons/apple-touch-icon.png"
      />
      <link
        key="favicon-lg"
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/icons/favicon-32x32.png"
      />
      <link
        key="favicon-sm"
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/icons/favicon-16x16.png"
      />
      <link
        key="safari-icon"
        rel="mask-icon"
        href="/static/icons/safari-pinned-tab.svg"
        color={primaryColor}
      />

      {/* Theme */}
      <meta key="ms-tile-color" name="msapplication-TileColor" content={primaryColor} />
      <meta key="theme-color" name="theme-color" content={primaryColor} />

      {/* Manifest file */}
      <link
        key="manifest"
        type="application/manifest+json"
        rel="manifest"
        href="/static/manifest.json"
      />

      {/* Open graph */}
      <meta key="og:url" property="og:url" content={SEO.openGraph.url} />
      <meta key="og:type" property="og:type" content={SEO.openGraph.type} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={SEO.openGraph.image} />
      <meta key="og:image:width" property="og:image:width" content={SEO.openGraph.imageWidth} />
      <meta key="og:image:height" property="og:image:height" content={SEO.openGraph.imageHeight} />
      <meta key="og:locale" property="og:locale" content={SEO.openGraph.locale} />
    </Head>
  );
};

HeadComponent.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};
HeadComponent.defaultProps = {};

export default withRouter(HeadComponent);
