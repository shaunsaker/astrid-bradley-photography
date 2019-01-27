import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import FeaturedImagesSection from '../../components/home/FeaturedImagesSection';
import PortfolioSection from '../../components/home/PortfolioSection';
import AboutSection from '../../components/home/AboutSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import QuoteSection from '../../components/QuoteSection';
import FeaturedOnSection from '../../components/home/FeaturedOnSection';
import ContactButtonSection from '../../components/ContactButton';

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
