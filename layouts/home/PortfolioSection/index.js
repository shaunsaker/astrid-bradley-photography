import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SPRINGBOARDS from './springboards';

import Springboard from '../../../components/Springboard';

const PortfolioSection = () => {
  return (
    <section>
      <h1>Portfolio</h1>

      <div className="row">
        {SPRINGBOARDS.map((springboard, index) => {
          const { image, text, href } = springboard;
          const spacerComponent = index !== SPRINGBOARDS.length - 1 && <div className="spacer" />;

          return (
            <Fragment>
              <Springboard image={image} text={text} href={href} />

              {spacerComponent}
            </Fragment>
          );
        })}
      </div>

      <style jsx>{styles}</style>
    </section>
  );
};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
