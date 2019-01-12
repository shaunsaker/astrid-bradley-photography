import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <Page>
      <Header />

      <div className="flex">
        <h1>
          Welcome to Astrid Bradley Photography | Wedding &amp; LIfestyle Photographer based in Cape
          Town, South Africa
        </h1>

        <p>Browse through my galleries to see a selection of my work.</p>

        <p>
          Please feel free to contact me with any comments or questions{' '}
          <Link href="/contact">
            <span className="link">here</span>
          </Link>
          .
        </p>
      </div>

      <Footer />
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
