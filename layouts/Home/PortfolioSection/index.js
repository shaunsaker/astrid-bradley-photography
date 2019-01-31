import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SPRINGBOARDS from './springboards';

import TitleText from '../../../components/TitleText';
import Springboard from '../../../components/Springboard';

const PortfolioSection = () => {
  return (
    <section>
      <TitleText>Portfolio</TitleText>

      <div className="row xs-wrap">
        {SPRINGBOARDS.map((springboard, index) => {
          const { text } = springboard;
          const spacerComponent = index !== SPRINGBOARDS.length - 1 && (
            <Fragment>
              <div className="spacer-hz hidden-xs-down" />

              <div className="spacer-vt hidden-xs-up" />
            </Fragment>
          );

          return (
            <Fragment key={text}>
              <Springboard {...springboard} />

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
