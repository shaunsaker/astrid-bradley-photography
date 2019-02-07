import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import GridItem from '../GridItem';
import Spinner from '../Spinner';

export class Image extends React.Component {
  constructor(props) {
    super(props);

    this.onLoadEnd = this.onLoadEnd.bind(this);
    this.setLoading = this.setLoading.bind(this);

    this.state = {
      loading: true,
    };
  }

  static propTypes = {
    src: PropTypes.string,
    gridSize: PropTypes.number,
    alt: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {};

  onLoadEnd() {
    this.setLoading(false);
  }

  setLoading(loading) {
    this.setState({
      loading,
    });
  }

  render() {
    const { loading } = this.state;
    const { gridSize, src, alt, children } = this.props;

    const loadingComponent = loading && (
      <div className="loading-container abs-stretch flex-center">
        <Spinner />

        <style jsx>{styles}</style>
      </div>
    );

    return (
      <GridItem key={src} gridSize={gridSize}>
        <img
          src={src}
          alt={alt}
          className="image"
          onLoad={this.onLoadEnd}
          onError={this.onLoadEnd}
        />

        {children}

        {loadingComponent}

        <style jsx>{styles}</style>
      </GridItem>
    );
  }
}

export default Image;
