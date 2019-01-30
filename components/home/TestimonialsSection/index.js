import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import TESTIMONIALS from './testimonials';

const TestimonialsSection = () => {
  return (
    <section>
      <h1>Testimonials</h1>

      {
        <ul className="row xs-wrap">
          {TESTIMONIALS.map((testimonial, index) => {
            const { image, name, text } = testimonial;
            const { src, alt } = image;
            const spacerComponent = index !== TESTIMONIALS.length - 1 && (
              <Fragment>
                <span className="spacer-hz hidden-xs-down" />

                <span className="spacer-vt hidden-xs-up" />
              </Fragment>
            );

            return (
              <Fragment key={name}>
                <li>
                  <div className="card-wrapper">
                    <div className="card-container shadow-sm">
                      <small>&quot;{text}&quot;</small>

                      <span className="spacer-vt" />

                      <h3>{name}</h3>
                    </div>

                    <span>▼</span>
                  </div>

                  <span className="spacer-vt" />

                  <img src={src} alt={alt} />
                </li>

                {spacerComponent}
              </Fragment>
            );
          })}
        </ul>
      }

      <style jsx>{styles}</style>
    </section>
  );
};

TestimonialsSection.propTypes = {};
TestimonialsSection.defaultProps = {};

export default TestimonialsSection;
