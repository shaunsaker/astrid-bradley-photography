import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snackbar from '../../components/Snackbar';

export class SystemMessageHandler extends React.Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.resetSystemMessage = this.resetSystemMessage.bind(this);

    this.timer = null;

    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const { systemMessage } = this.props;

    if (systemMessage && systemMessage !== prevProps.systemMessage) {
      // Reset the system message after 3s
      this.timer = setTimeout(this.resetSystemMessage, 3000);
    }
  }

  onClose() {
    this.clearTimer();
    this.resetSystemMessage();
  }

  clearTimer() {
    clearTimeout(this.timer);
  }

  resetSystemMessage() {
    const { dispatch } = this.props;

    dispatch({
      type: 'SET_SYSTEM_MESSAGE',
      payload: {
        message: null,
      },
    });
  }

  render() {
    const { systemMessage } = this.props;

    return systemMessage && <Snackbar text={systemMessage} handleClose={this.onClose} />;
  }
}

function mapStateToProps(state) {
  const { appState } = state;
  const { systemMessage } = appState;

  return {
    systemMessage,
  };
}

SystemMessageHandler.propTypes = {
  dispatch: PropTypes.func,
  systemMessage: PropTypes.string,
};

SystemMessageHandler.defaultProps = {};

export default connect(mapStateToProps)(SystemMessageHandler);
