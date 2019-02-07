import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import HeadingText from '../../components/HeadingText';
import Photo from './Photo';
import PhotoUploadList from './PhotoUploadList';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';

export class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.onCoverPhotoUploaded = this.onCoverPhotoUploaded.bind(this);
    this.onCoverPhotoDeleted = this.onCoverPhotoDeleted.bind(this);
    this.onShootPhotoUploaded = this.onShootPhotoUploaded.bind(this);
    this.onShootPhotoDeleted = this.onShootPhotoDeleted.bind(this);
    this.getShoot = this.getShoot.bind(this);
    this.saveShoot = this.saveShoot.bind(this);

    this.state = {};
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

  onCoverPhotoUploaded(downloadURL) {
    const shoot = this.getShoot();

    shoot.cover_photo_url = downloadURL;

    this.saveShoot(shoot);
  }

  onCoverPhotoDeleted() {
    const shoot = this.getShoot();

    shoot.cover_photo_url = null;

    this.saveShoot(shoot);
  }

  onShootPhotoUploaded(downloadURL) {
    const shoot = this.getShoot();

    if (shoot.photos) {
      shoot.photos.push(downloadURL);
    } else {
      shoot.photos = [downloadURL];
    }

    this.saveShoot(shoot);
  }

  onShootPhotoDeleted(index) {
    const shoot = this.getShoot();

    shoot.photos.splice(index, 1);

    this.saveShoot(shoot);
  }

  getShoot() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];

    return shoot;
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

  render() {
    const shoot = this.getShoot();
    const { name, id, cover_photo_url, photos } = shoot;
    const title = `Manage Photos: ${name}`;

    const coverPhotoComponent = cover_photo_url ? (
      <Photo
        src={cover_photo_url}
        alt={name}
        dir={id}
        handlePhotoDeleted={this.onCoverPhotoDeleted}
      />
    ) : (
      <PhotoUploadList dir={id} handlePhotoUploaded={this.onCoverPhotoUploaded} />
    );

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
        <section>
          <HeadingText>Cover Photo</HeadingText>

          {coverPhotoComponent}
        </section>

        <section>
          <HeadingText>Shoot Photos</HeadingText>

          <div className="row wrap">
            {photos &&
              photos.map((photo, index) => {
                const alt = `${name}-${index}`;

                return (
                  <Photo
                    key={photo}
                    src={photo}
                    alt={alt}
                    dir={id}
                    gridSize={4}
                    handlePhotoDeleted={() => this.onShootPhotoDeleted(index)}
                  />
                );
              })}

            <PhotoUploadList
              dir={id}
              gridSize={4}
              handlePhotoUploaded={this.onShootPhotoUploaded}
            />
          </div>
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
