import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class withSaveDocument extends React.Component {
    constructor(props) {
      super(props);

      this.onSaveDocument = this.onSaveDocument.bind(this);
      this.saveDocument = this.saveDocument.bind(this);

      this.state = {};
    }

    static propTypes = {
      dispatch: PropTypes.func,
    };

    static defaultProps = {};

    onSaveDocument(document, url) {
      this.saveDocument(document, url);
    }

    saveDocument(document, url) {
      const { dispatch } = this.props;
      const newDocument = document;

      // Add a date_modified field with the current time
      newDocument.date_modified = Date.now();

      dispatch({
        type: 'setDocument',
        payload: {
          document: newDocument,
        },
        meta: {
          url,
          nextAction: {
            type: 'SET_SYSTEM_MESSAGE',
            payload: {
              message: 'Saved successfully',
              isSuccess: true,
            },
          },
        },
      });
    }

    render() {
      return <ComposedComponent onSaveDocument={this.onSaveDocument} {...this.props} />;
    }
  }

  return connect()(withSaveDocument);
};
