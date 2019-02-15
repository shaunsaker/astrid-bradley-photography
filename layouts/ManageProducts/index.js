import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CONTROLS from './controls';
import styles from './styles';

import Layout from '../../components/Layout';
import ControlPanel from '../../components/ControlPanel';

import withAuth from '../../enhancers/withAuth';

class ManageProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout title="Manage Products">
        <ControlPanel controls={CONTROLS} />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default withAuth(connect(mapStateToProps)(ManageProducts));
