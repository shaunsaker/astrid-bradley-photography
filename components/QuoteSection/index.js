import React from 'react';

import styles from './styles';

import Springboard from '../Springboard';

const PortfolioSection = () => {
  return (
    <section>
      <Springboard
        image={{
          src: '/static/images/springboard-quote.jpg',
          alt: 'Build a quote',
        }}
        text="Build a Quote"
        action={{ nextLink: { href: '/build-quote' } }}
      />

      <style jsx>{styles}</style>
    </section>
  );
};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
