import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRef } from '../../services/storage';
import { getBlobURL } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import Thumbnail from './Thumbnail';
import ProgressBar from './ProgressBar';
import ControlPanel from '../../components/ControlPanel';
import AddPhotosButton from './AddPhotosButton';

import withAuth from '../../wrappers/withAuth';

export class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.onAddPhotos = this.onAddPhotos.bind(this);
    this.onDeletePhoto = this.onDeletePhoto.bind(this);
    this.onDeleteFile = this.onDeleteFile.bind(this);
    this.addFiles = this.addFiles.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.handleNextFileUpload = this.handleNextFileUpload.bind(this);
    this.setFiles = this.setFiles.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.handleSavePhoto = this.handleSavePhoto.bind(this);
    this.saveShoot = this.saveShoot.bind(this);
    this.logError = this.logError.bind(this);

    this.state = {
      files: [],
      progress: 0,
    };
  }

  static propTypes = {
    dispatch: PropTypes.func,
    shoots: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        photos: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    shootID: PropTypes.string,
  };

  static defaultProps = {};

  onAddPhotos(event) {
    const { files } = event.target;

    this.addFiles(files);
  }

  onDeletePhoto(index) {
    // TODO:
    // Save shoot
    // Remove from storag
  }

  onDeleteFile(index) {
    this.deleteFile(index);
  }

  addFiles(files) {
    const stateFiles = this.state.files;

    // Convert the files object to an array
    const filesArray = Object.keys(files).map((key) => files[key]);

    // Concat the filesArray onto the stateFiles
    const newFiles = stateFiles.concat(filesArray);

    this.setFiles(newFiles, this.handleNextFileUpload);
  }

  deletePhoto() {}

  deleteFile(index) {
    const { files } = this.state;

    files.splice(index, 1);

    this.setState({
      files,
    });
  }

  handleNextFileUpload() {
    const { files } = this.state;
    const firstFile = files[0];

    if (firstFile) {
      const { shootID } = this.props;
      const folder = shootID;
      const fileName = firstFile.name; // TODO: Should be unique
      const url = `${folder}/${fileName}`;

      this.uploadFile(firstFile, url);
    }
  }

  setFiles(files, callback) {
    this.setState(
      {
        files,
      },
      callback,
    );
  }

  async uploadFile(file, url) {
    const storageRef = await getRef();
    const uploadTask = storageRef.child(url).put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const { bytesTransferred, totalBytes } = snapshot;
        const progress = (100 * bytesTransferred) / totalBytes;

        this.setProgress(progress);
      },
      (error) => {
        this.logError(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          // Save the photo
          this.handleSavePhoto(downloadURL);

          // Delete the file from state
          this.deleteFile(0);

          // Upload the next file
          this.handleNextFileUpload();
        });
      },
    );
  }

  setProgress(progress) {
    this.setState({
      progress,
    });
  }

  handleSavePhoto(url) {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];

    if (shoot.photos) {
      shoot.photos.push(url);
    } else {
      shoot.photos = [url];
    }

    this.saveShoot(shoot);
  }

  saveShoot(shoot) {
    const { dispatch, shootID } = this.props;
    const document = shoot;

    // Add a date_modified field with the current time
    document.date_modified = Date.now();

    dispatch({
      type: 'setDocument',
      payload: {
        document,
      },
      meta: {
        url: `shoots/${shootID}`,
      },
    });
  }

  logError(error) {
    const { dispatch } = this.props;
    const { message } = error;

    dispatch({
      type: 'SET_SYSTEM_MESSAGE',
      payload: {
        message,
      },
    });
  }

  render() {
    const { files, progress } = this.state;
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const { name, id, photos } = shoot;
    const title = `Manage Photos: ${name}`;

    // Create the controls (needs to be dynamic)
    const controls = [
      {
        iconName: 'layout',
        label: 'Manage Layout',
        link: {
          href: `/admin/manage-layout?id=${id}`,
        },
      },
    ];

    return (
      <Layout title={title}>
        <section id="thumbnails-container" className="container flex row wrap">
          {photos &&
            photos.map((photo, index) => {
              const alt = `${name}-${index}`;

              return (
                <Thumbnail
                  key={photo}
                  src={photo}
                  alt={alt}
                  handleDelete={() => this.onDeletePhoto(index)}
                />
              );
            })}

          {files.map((file, index) => {
            const key = file.name;
            const src = getBlobURL(file);
            const alt = `${name}-temp-${index}`;
            const progressComponent = index === 0 && <ProgressBar progress={progress} />;

            return (
              <Thumbnail
                key={key}
                src={src}
                alt={alt}
                handleDelete={() => this.onDeleteFile(index)}
              >
                <div className="overlay">
                  {progressComponent}

                  <div className="spacer-vt" />
                </div>
              </Thumbnail>
            );
          })}
        </section>

        <ControlPanel controls={controls}>
          <AddPhotosButton handleChange={this.onAddPhotos} />

          <div className="spacer-hz" />
        </ControlPanel>

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoots: state.shoots,
  };
}

export default withAuth(connect(mapStateToProps)(ManagePhotos));
