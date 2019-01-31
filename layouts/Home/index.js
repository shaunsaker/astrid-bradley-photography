import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import FeaturedImagesSection from './FeaturedImagesSection';
import PortfolioSection from './PortfolioSection';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';
import QuoteSection from '../../components/QuoteSection';
import FeaturedOnSection from './FeaturedOnSection';
import ContactButtonSection from '../../components/ContactButton';

const Home = () => {
  return (
    <Layout>
      <FeaturedImagesSection />

      <PortfolioSection />

      <AboutSection />

      <TestimonialsSection />

      <QuoteSection />

      <FeaturedOnSection />

      <ContactButtonSection />
    </Layout>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
