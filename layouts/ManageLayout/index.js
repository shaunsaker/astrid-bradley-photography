import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';

class ManageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.getShoot = this.getShoot.bind(this);
    this.saveShoot = this.saveShoot.bind(this);

    this.state = {};
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape()),
    dispatch: PropTypes.func,
    shootID: PropTypes.string,
  };

  static defaultProps = {};

  onSave() {
    // TODO:
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
          <div>Layout section</div>
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

export default withAuth(connect(mapStateToProps)(ManageLayout));