import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';

import withAuth from '../../wrappers/withAuth';

export class EditShoot extends React.Component {
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
    return (
      <Layout title="TITLE">
        <div>
          <div />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoots: state.shoots,
  };
};

export default withAuth(connect(mapStateToProps)(EditShoot));
