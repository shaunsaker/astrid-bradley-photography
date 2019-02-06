import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import GridItem from '../../../components/GridItem';
import IconButton from '../../../components/IconButton';
import Spinner from '../../../components/Spinner';

export class Thumbnail extends React.Component {
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
    alt: PropTypes.string,
    handleDelete: PropTypes.func,
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
    const { src, alt, handleDelete, children } = this.props;

    const deleteComponent = handleDelete && !loading && (
      <div className="icon-button-container">
        <IconButton iconName="close" label="Delete Photo" small handleClick={handleDelete} />

        <style jsx>{styles}</style>
      </div>
    );

    const loadingComponent = loading && (
      <div className="loading-container">
        <Spinner />

        <style jsx>{styles}</style>
      </div>
    );

    return (
      <GridItem key={src} gridSize={4}>
        <img
          src={src}
          alt={alt}
          className="thumbnail"
          onLoad={this.onLoadEnd}
          onError={this.onLoadEnd}
        />

        {children}

        {loadingComponent}

        {deleteComponent}

        <div className="spacer-vt" />

        <style jsx>{styles}</style>
      </GridItem>
    );
  }
}

export default Thumbnail;
