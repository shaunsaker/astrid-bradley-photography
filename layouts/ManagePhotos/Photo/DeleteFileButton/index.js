import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteFile } from '../../../../services/storage';

import IconButton from '../../../../components/IconButton';

export class DeleteFileButton extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteFile = this.onDeleteFile.bind(this);
    this.onError = this.onError.bind(this);
    this.onFileDeleted = this.onFileDeleted.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.logError = this.logError.bind(this);

    this.state = {
      loading: false,
    };
  }

  static propTypes = {
    dir: PropTypes.string, // dir in storage to point to
    url: PropTypes.string, // url of the file
    handleFileDeleted: PropTypes.func.isRequired,
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onDeleteFile() {
    this.setLoading(true);

    const { dir, url } = this.props;
    let fileName = decodeURIComponent(url);
    fileName = fileName.split('?');
    fileName = fileName[0];
    fileName = fileName.split('/');
    fileName = fileName[fileName.length - 1];
    const storageURL = `${dir}/${fileName}`;

    deleteFile(storageURL, this.onFileDeleted, this.onError);
  }

  onError(error) {
    this.logError(error);
    this.onFileDeleted();
  }

  onFileDeleted() {
    const { handleFileDeleted } = this.props;

    handleFileDeleted();
    this.setLoading(false);
  }

  setLoading(loading) {
    this.setState({
      loading,
    });
  }

  logError(error) {
    const { dispatch } = this.props;
    const { message } = error;

    dispatch({
      type: 'SET_SYSTEM_MESSAGE',
      payload: { message, isError: true },
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <IconButton
        iconName="close"
        label="Delete Photo"
        small
        loading={loading}
        handleClick={this.onDeleteFile}
      />
    );
  }
}

export default connect()(DeleteFileButton);
