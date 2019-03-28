import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import styles from './styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.onSetSlideIndex = this.onSetSlideIndex.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);

    this.state = {
      slideIndex: 0,
    };
  }

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })),
  };

  static defaultProps = {};

  onSetSlideIndex(slideIndex) {
    this.setSlideIndex(slideIndex);
  }

  setSlideIndex(slideIndex) {
    this.setState({
      slideIndex,
    });
  }

  render() {
    const { slideIndex } = this.state;
    const { images } = this.props;

    return (
      <div className="wrapper">
        <AutoPlaySwipeableViews index={slideIndex} onChangeIndex={this.onSetSlideIndex}>
          {images.map((image) => {
            const { src, alt } = image;

            return (
              <div key={src} className="slide">
                <img src={src} alt={alt} className="image" />
              </div>
            );
          })}
        </AutoPlaySwipeableViews>

        <div className="dots-container row flex-center">
          {images.map((image, index) => {
            const { src } = image;
            const isActive = index === slideIndex;

            return (
              <button
                key={`dot-${src}`}
                type="button"
                onClick={() => this.onSetSlideIndex(index)}
                className={`dot ${isActive ? 'active' : ''} shadow-sm shadow-hover`}
                aria-label={`Image ${index + 1}`}
              />
            );
          })}
        </div>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
