import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import AddButton from '../../components/AddButton';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';
import withSaveShoot from '../../wrappers/withSaveShoot';

class ManageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.onAddRow = this.onAddRow.bind(this);
    this.onRemoveRow = this.onRemoveRow.bind(this);
    this.onAddColumn = this.onAddColumn.bind(this);
    this.onRemovePhoto = this.onRemovePhoto.bind(this);
    this.onAddPhoto = this.onAddPhoto.bind(this);
    this.onRemovePhoto = this.onRemovePhoto.bind(this);
    this.onSave = this.onSave.bind(this);
    this.getShoot = this.getShoot.bind(this);

    this.state = {
      layout: [[null]],
      /*
        layout: [
          [0, 3, 2],
          [1],
          [5, 4, null],
          [null]
        ]
      */
    };
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape()),
    shootID: PropTypes.string,
    onSaveShoot: PropTypes.func,
  };

  static defaultProps = {};

  onAddRow() {}

  onRemoveRow() {}

  onAddColumn() {}

  onRemoveColumn() {}

  onAddPhoto() {}

  onRemovePhoto() {}

  onSave() {
    // TODO: Strip null elements out
  }

  getShoot() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];

    return shoot;
  }

  render() {
    const { layout } = this.state;
    const shoot = this.getShoot();
    const { name } = shoot;
    const title = `Manage Photos: ${name}`;

    // Create the controls (needs to be dynamic)
    const controls = [
      {
        iconName: 'save',
        label: 'Save Layout',
        handleClick: this.onSave,
      },
    ];

    /*

    row
      image
      image
      image
      +
    row
      image
      +
    row
      image
      image
      +
    +

    [
      [0, 3, 2],
      [1],
      [5, 4]
    ]

    */

    return (
      <Layout title={title}>
        <section>
          {layout.map((row, index) => {
            return (
              <div key={index} className="row">
                {row.map((item) => {
                  return <div key={item} />;
                })}

                <AddButton handleClick={() => console.log('Clicked')} />
              </div>
            );
          })}

          <AddButton />
        </section>

        <div>Photos as thumbnails in scrollable container (should be draggable)</div>

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
