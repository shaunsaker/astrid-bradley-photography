import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToIndex = this.scrollToIndex.bind(this);

    this.slider = React.createRef();

    this.state = {};
  }

  static propTypes = {
    slideIndex: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string })),
  };

  static defaultProps = {};

  componentDidMount() {
    const { slideIndex } = this.props;

    this.scrollToIndex({ slideIndex, animated: false });
  }

  componentDidUpdate(prevProps) {
    const { slideIndex } = this.props;

    if (slideIndex !== prevProps.slideIndex) {
      this.scrollToIndex({ slideIndex, animated: true });
    }
  }

  scrollToIndex({ slideIndex, animated }) {
    const { clientWidth } = this.slider.current;
    const left = `${slideIndex * clientWidth}`;

    this.slider.current.scrollTo({ left, behavior: animated ? 'smooth' : 'auto' });
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={this.slider} className="container row">
        {children.map((item) => {
          const key = item && item.key;

          return (
            <div key={key} className="item-container">
              {item}
            </div>
          );
        })}

        <style jsx>{styles}</style>
      </div>
    );
  }
}
