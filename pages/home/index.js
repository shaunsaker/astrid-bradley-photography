import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import FeaturedImagesSection from '../../layouts/FeaturedImagesSection';
import PortfolioSection from '../../layouts/PortfolioSection';
import AboutSection from '../../layouts/AboutSection';
import TestimonialsSection from '../../layouts/TestimonialsSection';
import QuoteSection from '../../layouts/QuoteSection';
import FeaturedOnSection from '../../layouts/FeaturedOnSection';
import ContactButtonSection from '../../layouts/ContactButtonSection';

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

      <ContactButtonSection />
    </Page>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
