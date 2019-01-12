import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const PortfolioSection = () => {
  return (
    <section>
      <h2>About Me</h2>

      <div className="row">
        <img src="/static/images/pages/home/astrid-bradley.jpg" alt="Astrid Bradley" />

        <p>
          Colourful, spontaneous, captivating, fresh, emotive and modern. Capturing authentic
          weddings with a mix of lifestyle and documentary photos. My images can be described as
          natural and light, balanced with rich colours and warm tones. I love to document the day
          as it naturally unfolds, while connecting the story of the wedding day by also producing
          some editorial refinement in-between the significant moments.
        </p>
      </div>

      <style jsx>{styles}</style>
    </section>
  );
};

PortfolioSection.propTypes = {};
PortfolioSection.defaultProps = {};

export default PortfolioSection;
