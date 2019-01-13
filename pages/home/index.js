import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import FeaturedImagesSection from '../../layouts/home/FeaturedImagesSection';
import PortfolioSection from '../../layouts/home/PortfolioSection';
import AboutSection from '../../layouts/home/AboutSection';
import TestimonialsSection from '../../layouts/home/TestimonialsSection';
import QuoteSection from '../../layouts/home/QuoteSection';
import FeaturedOnSection from '../../layouts/home/FeaturedOnSection';

const Home = () => {
  return (
    <Page>
      <Header />

      <main>
        <FeaturedImagesSection />

        <PortfolioSection />

        <AboutSection />

        <TestimonialsSection />

        <QuoteSection />

        <FeaturedOnSection />
      </main>

      <Footer />
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
