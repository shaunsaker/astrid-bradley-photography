import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import IMAGES from './images';

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.getImageSliderWidth = this.getImageSliderWidth.bind(this);

    this.imageSlider = null;

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
  }

  componentWillUnmount() {
    this.imageSlider.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
    const imageSliderWidth = this.getImageSliderWidth();
    const target = event.target || event.srcElement;
    const scrollX = target.scrollLeft;
    const slideIndex = scrollX / imageSliderWidth;

    if (slideIndex % 1 === 0) {
      // Only if it's a whole number
      this.setSlideIndex(slideIndex);
    }
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
                onClick={() => this.scrollToIndex(index)}
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
