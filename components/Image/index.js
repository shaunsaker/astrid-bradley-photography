import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import Spinner from '../Spinner';

export default class Image extends React.Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);

    this.state = {
      isLoading: true,
    };
  }

  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    id: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {};

  onLoad() {
    this.setIsLoading(false);
  }

  onError() {
    this.setIsLoading(false);
  }

  setIsLoading(isLoading) {
    this.setState({
      isLoading,
    });
  }

  render() {
    const { isLoading } = this.state;
    const { src, alt, width, height, id, children } = this.props;
    const loadingComponent = src && isLoading && (
      <div className="loading-container abs-stretch flex-center">
        <Spinner small />
      </div>
    );

    return (
      <div className="container relative">
        <img
          src={src}
          alt={alt}
          id={id}
          width={width}
          height={height}
          className="image"
          style={{ width, height }}
          onLoad={this.onLoad}
          onError={this.onError}
        />

        {children}

        {loadingComponent}

        <style jsx>{styles}</style>
      </div>
    );
  }
}
