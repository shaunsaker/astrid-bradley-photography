import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import IMAGES from './images';

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.startInterval = this.startInterval.bind(this);
    this.clearInterval = this.clearInterval.bind(this);
    this.onInterval = this.onInterval.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onSetSlideIndex = this.onSetSlideIndex.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.getImageSliderWidth = this.getImageSliderWidth.bind(this);

    this.imageSlider = null;
    this.interval = null;

    this.timerInterval = 3000;

    this.state = {
      slideIndex: 0,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    const imageSlider = document.getElementById('image-slider');
    this.imageSlider = imageSlider;

    this.imageSlider.addEventListener('scroll', this.onScroll);
    document.addEventListener('keydown', this.onKeyPressed);

    this.startInterval();
  }

  componentDidUpdate(prevState) {
    const { slideIndex } = this.state;

    if (slideIndex !== prevState.slideIndex) {
      this.scrollToIndex(slideIndex);
    }
  }

  componentWillUnmount() {
    this.imageSlider.removeEventListener('scroll', this.onScroll);
    document.removeEventListener('keydown', this.onKeyPressed);
    this.clearInterval();
  }

  startInterval() {
    if (!IS_DEV) {
      this.interval = setInterval(this.onInterval, this.timerInterval);
    }
  }

  clearInterval() {
    if (!IS_DEV) {
      clearInterval(this.interval);
    }
  }

  onInterval() {
    const { slideIndex } = this.state;

    if (slideIndex === IMAGES.length - 1) {
      // At the end, reset
      this.setSlideIndex(0);
    } else {
      this.setSlideIndex(slideIndex + 1);
    }
  }

  onScroll(event) {
    const imageSliderWidth = this.getImageSliderWidth();
    const target = event.target || event.srcElement;
    const scrollX = target.scrollLeft;
    const slideIndex = scrollX / imageSliderWidth;

    if (slideIndex % 1 === 0) {
      // Only if it's a whole number
      this.onSetSlideIndex(slideIndex);
    }
  }

  onKeyPressed(event) {
    const { slideIndex } = this.state;
    const { keyCode } = event;
    const isLeftArrow = keyCode === 37;
    const isRightArrow = keyCode === 39;

    if (isLeftArrow) {
      if (slideIndex === 0) {
        // Go backwards
        this.onSetSlideIndex(IMAGES.length - 1);
      } else {
        this.onSetSlideIndex(slideIndex - 1);
      }
    } else if (isRightArrow) {
      if (slideIndex === IMAGES.length - 1) {
        // Reset
        this.onSetSlideIndex(0);
      } else {
        this.onSetSlideIndex(slideIndex + 1);
      }
    }
  }

  onSetSlideIndex(slideIndex) {
    this.clearInterval();
    this.setSlideIndex(slideIndex);
    this.startInterval();
  }

  setSlideIndex(slideIndex) {
    this.setState({
      slideIndex,
    });
  }

  scrollToIndex(index) {
    const imageSliderWidth = this.getImageSliderWidth();
    const scrollX = imageSliderWidth * index;

    this.scrollTo(scrollX);
  }

  scrollTo(left) {
    this.imageSlider.scrollTo({ left, behavior: 'smooth' });
  }

  getImageSliderWidth() {
    const imageSlider = document.getElementById('image-slider');
    const imageSliderWidth = imageSlider.getBoundingClientRect().width;

    return imageSliderWidth;
  }

  render() {
    const { slideIndex } = this.state;

    return (
      <div className="wrapper">
        <div id="image-slider" className="container row">
          {IMAGES.map((image) => {
            const { src, alt } = image;

            return (
              <div key={src} className="slide">
                <img src={src} alt={alt} className="image" />
              </div>
            );
          })}
        </div>

        <div className="dots-container row">
          {IMAGES.map((image, index) => {
            const { src } = image;
            const isActive = index === slideIndex;

            return (
              <button
                key={`dot-${src}`}
                type="button"
                onClick={() => this.onSetSlideIndex(index)}
                className={`dot ${isActive && 'active'} shadow-sm shadow-hover`}
              />
            );
          })}
        </div>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
