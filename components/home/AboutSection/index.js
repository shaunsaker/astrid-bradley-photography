import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const AboutSection = () => {
  return (
    <section>
      <h1>About Me</h1>

      <div className="row xs-wrap">
        <div className="image-container">
          <img src="/static/images/astrid-bradley.jpg" alt="Astrid Bradley" />
        </div>

        <div className="spacer-hz hidden-xs-down" />

        <div className="spacer-vt hidden-xs-up" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque eros ac
            sapien interdum laoreet. Nulla mauris magna, tincidunt sed efficitur ut, finibus vel
            magna. Curabitur purus mi, laoreet et tortor eu, sollicitudin congue turpis. Duis
            eleifend dolor erat, id maximus risus commodo eu. Curabitur vel hendrerit velit. Mauris
            eget augue sed est blandit egestas ac et tortor. Cras feugiat neque elementum, egestas
            tortor sed, congue lorem. Ut euismod finibus vehicula.
          </p>
        </div>
      </div>

      <style jsx>{styles}</style>
    </section>
  );
};

AboutSection.propTypes = {};
AboutSection.defaultProps = {};

export default AboutSection;
