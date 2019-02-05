import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import Thumbnail from './Thumbnail';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';

export class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.onAddPhotos = this.onAddPhotos.bind(this);
    this.onDeletePhoto = this.onDeletePhoto.bind(this);
    this.setFiles = this.setFiles.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.saveShoot = this.saveShoot.bind(this);

    this.state = {
      files: null,
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

  componentDidUpdate(prevProps, prevState) {
    // TODO:
    // On files change
    // Upload the first one
    // If no files left
    // Save document
  }

  onAddPhotos(event) {
    const { files } = event.target;

    this.setFiles(files);
  }

  onDeletePhoto(index) {
    // TODO:
    // Save shoot
    // Remove from storag
  }

  setFiles(files) {
    this.setState({
      files,
    });
  }

  uploadFile(file) {
    // TODO:
    // On progress
    // Update state
    // On complete
    // Save shoot
  }

  deleteFile() {
    // TODO:
  }

  setProgress(progress) {
    this.setState({
      progress,
    });
  }

  saveShoot() {
    // TODO:
    // On save
    // Remove from state
  }

  render() {
    const { files, progress } = this.state;
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const { name, id, photos } = shoot;
    const title = `Manage Photos: ${name}`;
    const filesArray = files && Object.keys(files).map((key) => files[key]);

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

    console.log(photos, filesArray);

    // TODO: Files thumbnails
    // TODO: Add button bottom RHS

    return (
      <Layout title={title}>
        <section id="thumbnails-container" className="container flex row wrap">
          {photos.map((photo, index) => {
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
        </section>

        <ControlPanel controls={controls}>
          <div />
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
