import React from 'react';
import PropTypes from 'prop-types';

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
        link={{ href: '/build-a-quote' }}
      />

      <style jsx>{styles}</style>
    </section>
  );
};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
