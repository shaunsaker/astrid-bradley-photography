import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../static/styles/styleConstants';
import styles from './styles';

import Icon from '../Icon';
import Spinner from '../Spinner';
import SmallText from '../SmallText';

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
    message: PropTypes.string,
    isInfo: PropTypes.bool,
    isLoading: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isError: PropTypes.bool,
    handleClose: PropTypes.func,
  };

  static defaultProps = {};

  componentDidMount() {
    const { isLoading } = this.props;

    // Only auto hide if its not the loading state
    if (!isLoading) {
      setTimeout(this.handleClose, 3000);
    }
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
    const { message, isInfo, isLoading, isSuccess, isError } = this.props;
    const iconName = isInfo
      ? 'info-outline'
      : isSuccess
      ? 'check'
      : isError
      ? 'error-outline'
      : null;
    const iconColor = isSuccess ? colors.green : isError ? colors.red : colors.white;
    const iconComponent = isLoading ? (
      <Spinner small />
    ) : (
      <Icon name={iconName} color={iconColor} />
    );

    return (
      <div className={`wrapper shadow-lg animate-in ${shouldAnimateOut && 'animate-out'}`}>
        <div className="container row">
          {iconComponent}

          <div className="spacer-hz small" />

          <SmallText white>{message}</SmallText>
        </div>

        <style jsx>{styles}</style>
      </div>
    );
  }
}
