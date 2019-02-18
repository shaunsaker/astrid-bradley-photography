import React, { Fragment } from 'react';

import styles from './styles';
import TESTIMONIALS from './testimonials';

import Card from '../../../components/Card';
import TitleText from '../../../components/TitleText';
import HeadingText from '../../../components/HeadingText';
import SmallText from '../../../components/SmallText';

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
                    <Card>
                      <SmallText>&quot;{text}&quot;</SmallText>

                      <div className="spacer-vt" />

                      <HeadingText>{name}</HeadingText>

                      <div className="spacer-vt" />
                    </Card>

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
