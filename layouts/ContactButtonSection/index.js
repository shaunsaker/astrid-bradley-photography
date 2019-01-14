import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import styles from './styles';

import IconButton from '../../components/IconButton';

export default class ContactButtonSection extends React.Component {
  constructor(props) {
    super(props);

    this.onShouldAnimate = this.onShouldAnimate.bind(this);
    this.toggleShouldAnimate = this.toggleShouldAnimate.bind(this);
    this.navigate = this.navigate.bind(this);

    this.state = {
      shouldAnimate: false,
    };
  }

  static propTypes = {};

  static defaultProps = {};

  onShouldAnimate() {
    this.toggleShouldAnimate();

    setTimeout(() => {
      this.navigate();
    }, 500);
  }

  toggleShouldAnimate() {
    const { shouldAnimate } = this.state;

    this.setState({
      shouldAnimate: !shouldAnimate,
    });
  }

  navigate() {
    Router.push('/contact');
  }

  render() {
    const { shouldAnimate } = this.state;

    return (
      <Fragment>
        <div className="pageAnimator">
          <IconButton className={shouldAnimate ? 'scale' : null} />
        </div>

        <div className={`buttonContainer ${shouldAnimate && 'hidden'}`}>
          <IconButton name="mail" handleClick={this.onShouldAnimate} />
        </div>

        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}
