import React from 'react';

import styles from './styles';
import TESTIMONIALS from './testimonials';

import Grid from '../../../components/Grid';
import Card from '../../../components/Card';
import TitleText from '../../../components/TitleText';
import HeadingText from '../../../components/HeadingText';
import SmallText from '../../../components/SmallText';

const TestimonialsSection = () => {
  return (
    <section>
      <TitleText>Testimonials</TitleText>

      <Grid size={3}>
        {TESTIMONIALS.map((testimonial) => {
          const { image, name, text } = testimonial;
          const { src, alt } = image;

          return (
            <div key={name} className="item-container">
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
            </div>
          );
        })}
      </Grid>

      <style jsx>{styles}</style>
    </section>
  );
};

TestimonialsSection.propTypes = {};
TestimonialsSection.defaultProps = {};

export default TestimonialsSection;
