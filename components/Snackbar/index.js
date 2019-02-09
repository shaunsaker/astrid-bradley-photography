import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Icon from '../Icon';
import ParagraphText from '../ParagraphText';

export default class Snackbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.setShouldAnimateOut = this.setShouldAnimateOut.bind(this);

    this.state = {
      shouldAnimateOut: false,
    };
  }

  static propTypes = {
    text: PropTypes.string,
    handleClose: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    setTimeout(this.handleClose, 3000);
  }

  handleClose() {
    const { handleClose } = this.props;

    this.setShouldAnimateOut(true);

    setTimeout(handleClose, 500);
  }

  setShouldAnimateOut(shouldAnimateOut) {
    this.setState({
      shouldAnimateOut,
    });
  }

  render() {
    const { shouldAnimateOut } = this.state;
    const { text } = this.props;

    return (
      <div className={`wrapper shadow-lg animate-in ${shouldAnimateOut && 'animate-out'}`}>
        <div className="container row">
          <Icon name="info" color={colors.white} />

          <div className="spacer-hz" />

          <ParagraphText white>{text}</ParagraphText>
        </div>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
