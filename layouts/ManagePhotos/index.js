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
import withSaveShoot from '../../wrappers/withSaveShoot';

export class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.onCoverPhotoUploaded = this.onCoverPhotoUploaded.bind(this);
    this.onCoverPhotoDeleted = this.onCoverPhotoDeleted.bind(this);
    this.onShootPhotoUploaded = this.onShootPhotoUploaded.bind(this);
    this.onShootPhotoDeleted = this.onShootPhotoDeleted.bind(this);
    this.getShoot = this.getShoot.bind(this);

    this.state = {};
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        photos: PropTypes.arrayOf(PropTypes.string),
      }),
    ),
    shootID: PropTypes.string,
    onSaveShoot: PropTypes.func,
  };

  static defaultProps = {};

  onCoverPhotoUploaded(downloadURL) {
    const { shootID, onSaveShoot } = this.props;
    const shoot = this.getShoot();

    shoot.cover_photo_url = downloadURL;

    onSaveShoot(shoot, shootID);
  }

  onCoverPhotoDeleted() {
    const { shootID, onSaveShoot } = this.props;
    const shoot = this.getShoot();

    shoot.cover_photo_url = null;

    onSaveShoot(shoot, shootID);
  }

  onShootPhotoUploaded(downloadURL) {
    const { shootID, onSaveShoot } = this.props;
    const shoot = this.getShoot();

    if (shoot.photos) {
      shoot.photos.push(downloadURL);
    } else {
      shoot.photos = [downloadURL];
    }

    onSaveShoot(shoot, shootID);
  }

  onShootPhotoDeleted(index) {
    const { shootID, onSaveShoot } = this.props;
    const shoot = this.getShoot();

    shoot.photos.splice(index, 1);

    // IF photos is empty
    // THEN remove it entirely
    if (!shoot.photos.length) {
      shoot.photos = null;
    }

    onSaveShoot(shoot, shootID);
  }

  getShoot() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];

    return shoot;
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

          <div className="photos-container row wrap">
            {photos &&
              photos.map((photo, index) => {
                const alt = `${name}-${index}`;

                return (
                  <Photo
                    key={photo}
                    src={photo}
                    alt={alt}
                    dir={id}
                    handlePhotoDeleted={() => this.onShootPhotoDeleted(index)}
                  />
                );
              })}

            <PhotoUploadList
              dir={id}
              gridSize={4}
              isThumbnail
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

export default withAuth(withSaveShoot(connect(mapStateToProps)(ManagePhotos)));
