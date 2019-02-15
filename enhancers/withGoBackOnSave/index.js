import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class withGoBackOnSave extends React.Component {
    constructor(props) {
      super(props);

      this.goBack = this.goBack.bind(this);

      this.state = {};
    }

    static propTypes = {
      isLoading: PropTypes.bool,
      router: PropTypes.shape({
        back: PropTypes.func,
      }),
    };

    static defaultProps = {};

    componentDidUpdate(prevProps) {
      const { isLoading } = this.props;

      // IF the app is not loading
      // IF the app was loading
      if (!isLoading && prevProps.isLoading) {
        this.goBack();
      }
    }

    goBack() {
      const { router } = this.props;
      const { back } = router;

      back();
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    const { appState } = state;
    const { pendingTransactions } = appState;
    const isLoading = pendingTransactions.length ? true : false;

    return {
      isLoading,
    };
  };

  return connect(mapStateToProps)(withGoBackOnSave);
};
