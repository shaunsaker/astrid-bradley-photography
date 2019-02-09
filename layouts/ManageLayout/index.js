import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../wrappers/withAuth';
import withSaveShoot from '../../wrappers/withSaveShoot';

class ManageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.getShoot = this.getShoot.bind(this);

    this.state = {};
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape()),
    shootID: PropTypes.string,
    onSaveShoot: PropTypes.func,
  };

  static defaultProps = {};

  onSave() {}

  getShoot() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];

    return shoot;
  }

  render() {
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
