import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';

export class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {
    dispatch: PropTypes.func,
    shoots: PropTypes.arrayOf(PropTypes.shape({})),
    shootID: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { shoots, shootID } = this.props;
    const shoot = shoots.filter((item) => item.id === shootID)[0];
    const { name } = shoot;
    const title = `Manage Photos: ${name}`;

    return (
      <Layout title={title}>
        <div />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoots: state.shoots,
  };
}

export default connect(mapStateToProps)(ManagePhotos);
