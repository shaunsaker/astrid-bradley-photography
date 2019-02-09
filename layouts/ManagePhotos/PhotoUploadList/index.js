import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getBlobURL } from '../../../utils';
import { uploadFile } from '../../../services/storage';
import styles from './styles';

import ProgressBar from './ProgressBar';
import Image from '../../../components/Image';
import IconButton from '../../../components/IconButton';
import AddFileButton from '../AddFileButton';

export class PhotoUploadList extends React.Component {
  constructor(props) {
    super(props);

    this.onAddFiles = this.onAddFiles.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onError = this.onError.bind(this);
    this.onFileUploaded = this.onFileUploaded.bind(this);
    this.onRemovePhoto = this.onRemovePhoto.bind(this);
    this.handleNextFileUpload = this.handleNextFileUpload.bind(this);
    this.removeFileAtIndex = this.removeFileAtIndex.bind(this);
    this.setFiles = this.setFiles.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.logError = this.logError.bind(this);

    this.state = {
      files: [],
      progress: 0,
    };
  }

  static propTypes = {
    dir: PropTypes.string, // dir to upload files to
    handlePhotoUploaded: PropTypes.func.isRequired,
    dispatch: PropTypes.func,
  };

  static defaultProps = {};

  onAddFiles(files) {
    const stateFiles = this.state.files;

    // Convert the files object to an array
    const filesArray = Object.keys(files).map((key) => files[key]);

    // Concat the filesArray onto the stateFiles
    const newFiles = stateFiles.concat(filesArray);

    this.setFiles(newFiles, this.handleNextFileUpload);
  }

  onProgress(progress) {
    this.setProgress(progress);
  }

  onError(error) {
    this.logError(error);
  }

  onFileUploaded(downloadURL) {
    const { handlePhotoUploaded } = this.props;

    handlePhotoUploaded(downloadURL);

    this.removeFileAtIndex(0);
    this.handleNextFileUpload();
  }

  onRemovePhoto(index) {
    this.removeFileAtIndex(index);
  }

  handleNextFileUpload() {
    const { files } = this.state;
    const file = files[0];
    if (file) {
      const { name } = file;
      const { dir } = this.props;
      const url = `${dir}/${name}`;
      uploadFile(url, file, this.onProgress, this.onError, this.onFileUploaded);
    }
  }

  removeFileAtIndex(index) {
    const { files } = this.state;

    files.splice(index, 1);

    this.setFiles(files);
  }

  setFiles(files, callback) {
    this.setState(
      {
        files,
      },
      callback,
    );
  }

  setProgress(progress) {
    this.setState({
      progress,
    });
  }

  logError(error) {
    const { dispatch } = this.props;
    const { message } = error;

    dispatch({
      type: 'SET_SYSTEM_MESSAGE',
      payload: { message },
    });
  }

  render() {
    const { files, progress } = this.state;

    return (
      <Fragment>
        {files.map((file, index) => {
          const key = file.name;
          const src = getBlobURL(file);
          const alt = `temp-${index}`;
          const progressComponent =
            index === 0 ? (
              <div className="abs-stretch">
                <ProgressBar progress={progress} />
              </div>
            ) : null;

          return (
            <div key={key} className="image-container relative">
              <Image src={src} alt={alt} />

              <div className="overlay abs-stretch" />

              {progressComponent}

              <div className="file-delete-button-container">
                <IconButton
                  iconName="close"
                  label="Remove Photo"
                  small
                  handleClick={() => this.onRemovePhoto(index)}
                />
              </div>
            </div>
          );
        })}

        <AddFileButton multiple handleAddFiles={this.onAddFiles} />

        <style jsx>{styles}</style>
      </Fragment>
    );
  }
}

export default connect()(PhotoUploadList);
