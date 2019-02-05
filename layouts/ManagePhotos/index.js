import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import ProgressBar from './ProgressBar';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';

export class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.onAddPhotos = this.onAddPhotos.bind(this);
    this.setFiles = this.setFiles.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
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
    // On files change
    // Upload the first one
    // If no files left
    // Save document
  }

  onAddPhotos(event) {
    const { files } = event.target;

    this.setFiles(files);

    /*
      1. Set files to state
      2. Render Thumbnails from state
      3. Upload one at a time
      4. Show progress
      5. Once complete, save to document
    */
  }

  setFiles(files) {
    this.setState({
      files,
    });
  }

  uploadFile(file) {
    // On progress
    // Update state
    // On complete
    // Save shoot
  }

  setProgress(progress) {
    this.setState({
      progress,
    });
  }

  saveShoot() {
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

    return (
      <Layout title={title}>
        <section className="container flex row">
          <div />
        </section>

        <ControlPanel controls={controls} />

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
