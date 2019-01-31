import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/Page';
import Header from '../../components/Header';
import FeaturedImagesSection from './FeaturedImagesSection';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';
import QuoteSection from '../../components/QuoteSection';
import FeaturedOnSection from './FeaturedOnSection';
import ContactButtonSection from '../../components/ContactButton';
import Footer from '../../components/Footer';

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

Home.getInitialProps = async () => {};
Home.propTypes = {};
Home.defaultProps = {};

export default Home;
