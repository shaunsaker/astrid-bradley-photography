import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Springboard from '../../components/Springboard';

const PortfolioSection = () => {
  return (
    <section>
      <Springboard
        image={{
          src: '/static/images/layouts/QuoteSection/springboard-quote.jpg',
          alt: 'Build a quote',
        }}
        text="Build a Quote"
        href="/build-a-quote"
      />

      <style jsx>{styles}</style>
    </section>
  );
};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
