import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';

import Layout from '../../components/Layout';

import withAuth from '../../wrappers/withAuth';

class ManageLayout extends React.Component {
  constructor(props) {
    super(props);

    this.getShoot = this.getShoot.bind(this);

    this.state = {};
  }

  static propTypes = {
    shoots: PropTypes.arrayOf(PropTypes.shape()),
    dispatch: PropTypes.func,
    shootID: PropTypes.string,
  };

  static defaultProps = {};

  getShoot() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];

    return shoot;
  }

  render() {
    const shoot = this.getShoot();
    const { name } = shoot;
    const title = `Manage Photos: ${name}`;

    return (
      <Layout title={title}>
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
