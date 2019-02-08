import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class withSaveShoot extends React.Component {
    constructor(props) {
      super(props);

      this.onSaveShoot = this.onSaveShoot.bind(this);
      this.saveShoot = this.saveShoot.bind(this);

      this.state = {};
    }

    static propTypes = {
      dispatch: PropTypes.func,
    };

    static defaultProps = {};

    onSaveShoot(shoot, shootID) {
      this.saveShoot(shoot, shootID);
    }

    saveShoot(shoot, shootID) {
      const { dispatch } = this.props;
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
          nextAction: {
            type: 'SET_SYSTEM_MESSAGE',
            payload: {
              message: 'Shoot saved successfully',
            },
          },
        },
      });
    }

    render() {
      return <ComposedComponent onSaveShoot={this.onSaveShoot} {...this.props} />;
    }
  }

  return connect()(withSaveShoot);
};
