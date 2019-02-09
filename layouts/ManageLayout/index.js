import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cloneObject } from '../../utils';
import styles from './styles';

import Layout from '../../components/Layout';
import Placeholder from '../../components/Placeholder';
import AddButton from '../../components/AddButton';
import IconButton from '../../components/IconButton';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';
import withSaveShoot from '../../wrappers/withSaveShoot';

const BLANK_ROW = [null];
const INITIAL_LAYOUT = [BLANK_ROW];

class ManageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.onAddRow = this.onAddRow.bind(this);
    this.onAddColumn = this.onAddColumn.bind(this);
    this.onRemovePhoto = this.onRemovePhoto.bind(this);
    this.onAddPhoto = this.onAddPhoto.bind(this);
    this.onRemovePhoto = this.onRemovePhoto.bind(this);
    this.onSave = this.onSave.bind(this);
    this.getShoot = this.getShoot.bind(this);
    this.setLayout = this.setLayout.bind(this);

    this.state = {
      layout: INITIAL_LAYOUT,
    };
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape()),
    shootID: PropTypes.string,
    onSaveShoot: PropTypes.func,
  };

  static defaultProps = {};

  onAddRow() {
    const { layout } = this.state;

    layout.push(BLANK_ROW);

    this.setLayout(layout);
  }

  onAddColumn(rowIndex) {
    const { layout } = cloneObject(this.state);

    layout[rowIndex].push(null);

    this.setLayout(layout);
  }

  onRemoveColumn(rowIndex, columnIndex) {
    let { layout } = cloneObject(this.state);
    const isInitialState = layout.length === 1 && layout[0].length === 1;

    // IF its the initial state
    // THEN do nothing
    if (!isInitialState) {
      const row = layout[rowIndex];

      row.splice(columnIndex, 1);

      // IF the row is empty
      // THEN remove it from the layout array
      if (!row.length) {
        layout.splice(rowIndex, 1);
      }

      // ELSE
      // THEN replace it on the layout array
      else {
        layout.splice(rowIndex, 1, row);
      }

      // IF the layout is empty
      // THEN reset it to initial state
      if (!layout.length) {
        layout = INITIAL_LAYOUT;
      }

      this.setLayout(layout);
    }
  }

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

  setLayout(layout) {
    this.setState({
      layout,
    });
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

    return (
      <Layout title={title}>
        <section>
          {layout.map((row, rowIndex) => {
            const rowKey = `row-${rowIndex}`;
            const gridSize = row.length;

            return (
              <div key={rowKey} className="row relative">
                {row.map((item, columnIndex) => {
                  const columnKey = `placeholder-${columnIndex}`;

                  // IF null
                  // THEN return a placeholder
                  if (!item) {
                    return (
                      <Placeholder key={columnKey} gridSize={gridSize}>
                        <div className="delete-button-container">
                          <IconButton
                            iconName="close"
                            label="Remove"
                            small
                            handleClick={() => this.onRemoveColumn(rowIndex, columnIndex)}
                          />
                        </div>
                      </Placeholder>
                    );
                  }

                  // ELSE
                  // THEN return an image
                  return <div key={item} gridSize={gridSize} />;
                })}

                <div className="add-button-container">
                  <AddButton handleClick={() => this.onAddColumn(rowIndex)} />
                </div>
              </div>
            );
          })}

          <AddButton handleClick={this.onAddRow} />
        </section>

        <div>Photo Thumbnail List (draggable)</div>

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
