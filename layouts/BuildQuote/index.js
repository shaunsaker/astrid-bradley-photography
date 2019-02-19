import React from 'react';
import PropTypes from 'prop-types';

import SLIDES from './slides';
import styles from './styles';

import Layout from '../../components/Layout';
import ProgressItem from './ProgressItem';
import ContactButton from '../../components/ContactButton';

class BuildQuote extends React.Component {
  constructor(props) {
    super(props);

    this.setSlideIndex = this.setSlideIndex.bind(this);

    this.state = {
      slideIndex: 0,
    };
  }

  setSlideIndex(slideIndex) {
    this.setState({
      slideIndex,
    });
  }

  render() {
    const { slideIndex } = this.state;
    const currentSlide = SLIDES[slideIndex];
    const Component = currentSlide.component;
    const currentComponent = Component && <Component />;

    return (
      <Layout title="Build Quote">
        <div className="row wrap">
          {SLIDES.map((slide, index) => {
            const { title } = slide;
            const number = index + 1;
            const opacity = index > slideIndex;

            // Only display one progress item ahead, if any
            if (index <= slideIndex + 1) {
              return (
                <div key={title} className={`progress-item-container ${opacity && 'opacity'}`}>
                  <ProgressItem number={number} text={title} />
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="spacer-vt large" />

        {currentComponent}

        <ContactButton />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

export default BuildQuote;
