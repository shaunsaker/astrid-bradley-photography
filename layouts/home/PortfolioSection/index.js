import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Springboard from '../../../components/Springboard';

const PortfolioSection = () => {
  return (
    <div>
      <h1>Portfolio</h1>

      <div className="row">
        <Springboard
          image={{ src: '/static/images/pages/home/springboard-weddings.jpg', alt: 'Weddings' }}
          text="Weddings"
          href="weddings"
        />

        <div className="margin-hz" />

        <Springboard
          image={{
            src: '/static/images/pages/home/springboard-lifestyle.jpg',
            alt: 'Weddings',
          }}
          text="Lifestyle"
          href="lifestyle"
        />
      </div>
    </div>
  );
};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
