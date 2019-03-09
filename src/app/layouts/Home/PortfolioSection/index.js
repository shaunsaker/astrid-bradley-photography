import React from 'react';

import styles from './styles';
import SPRINGBOARDS from './springboards';

import TitleText from '../../../components/TitleText';
import Grid from '../../../components/Grid';
import Springboard from '../../../components/Springboard';

const PortfolioSection = () => {
  return (
    <section>
      <TitleText>Portfolio</TitleText>

      <Grid size={2}>
        {SPRINGBOARDS.map((springboard) => {
          const { text } = springboard;

          return <Springboard key={text} {...springboard} />;
        })}
      </Grid>

      <style jsx>{styles}</style>
    </section>
  );
};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
