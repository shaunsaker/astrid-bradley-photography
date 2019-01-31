import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import TESTIMONIALS from './testimonials';

import TitleText from '../../../components/TitleText';

const TestimonialsSection = () => {
  return (
    <section>
      <TitleText>Testimonials</TitleText>

      {
        <ul className="row xs-wrap">
          {TESTIMONIALS.map((testimonial, index) => {
            const { image, name, text } = testimonial;
            const { src, alt } = image;
            const spacerComponent = index !== TESTIMONIALS.length - 1 && (
              <Fragment>
                <div className="spacer-hz hidden-xs-down" />

                <div className="spacer-vt hidden-xs-up" />
              </Fragment>
            );

            return (
              <Fragment key={name}>
                <li>
                  <div className="card-wrapper">
                    <div className="card-container shadow-sm">
                      <small>&quot;{text}&quot;</small>

                      <div className="spacer-vt" />

                      <h3>{name}</h3>
                    </div>

                    <span>▼</span>
                  </div>

                  <div className="spacer-vt" />

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