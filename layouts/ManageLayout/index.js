import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reorderArrayItems } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import DraggableList from '../../components/DraggableList';
import Image from '../../components/Image';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../enhancers/withAuth';
import withSaveShoot from '../../enhancers/withSaveShoot';

class ManageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
    this.onSave = this.onSave.bind(this);
    this.getShoot = this.getShoot.bind(this);
    this.setPhotos = this.setPhotos.bind(this);
    this.renderPhoto = this.renderPhoto.bind(this);

    const shoot = this.getShoot();
    const { photos } = shoot;

    this.state = {
      photos,
    };
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape()),
    shootID: PropTypes.string,
    onSaveShoot: PropTypes.func,
  };

  static defaultProps = {};

  onDragEnd(result) {
    const { photos } = this.state;
    const { source, destination } = result;

    // Dropped inside the list
    if (result.destination) {
      const reorderedPhotos = reorderArrayItems(photos, source.index, destination.index);

      this.setPhotos(reorderedPhotos);
    }
  }

  onSave() {
    const { photos } = this.state;
    const { onSaveShoot, shootID } = this.props;
    const shoot = this.getShoot();

    shoot.photos = photos;

    onSaveShoot(shoot, shootID);
  }

  getShoot() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];

    return shoot;
  }

  setPhotos(photos) {
    this.setState({
      photos,
    });
  }

  renderPhoto(photo) {
    return (
      <Fragment>
        <Image {...photo} />

        <div className="spacer-vt" />
      </Fragment>
    );
  }

  render() {
    const { photos } = this.state;
    const shoot = this.getShoot();
    const { name } = shoot;
    const title = `Manage Layout: ${name}`;

    // Create the controls (needs to be dynamic)
    const controls = [
      {
        iconName: 'save',
        label: 'Save Layout',
        handleClick: this.onSave,
      },
    ];

    return (
      <Layout title={title}>
        <DraggableList
          items={photos}
          renderItem={this.renderPhoto}
          handleDragEnd={this.onDragEnd}
        />

        <ControlPanel controls={controls} />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withAuth(withSaveShoot(connect(mapStateToProps)(ManageLayout)));
