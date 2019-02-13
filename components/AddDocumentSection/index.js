import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { forms } from '../../config';

import Form from '../Form';

import withSaveDocument from '../../wrappers/withSaveDocument';

export class AddDocumentSection extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  static propTypes = {
    // Parent
    formName: PropTypes.string,
    collectionURL: PropTypes.string,

    // connect
    isLoading: PropTypes.bool,

    // withSaveDocument
    onSaveDocument: PropTypes.func,

    // withRouter
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
      const { router } = this.props;
      const { back } = router;

      back();
    }
  }

  onSubmit(values) {
    const { collectionURL, onSaveDocument } = this.props;
    const document = {};

    // Parse number strings into ints (if any)
    Object.keys(values).forEach((key) => {
      const value = values[key];
      const parsedValue = parseInt(value, 10) || value;

      document[key] = parsedValue;
    });

    // Use the name as the id
    const id = document.name
      .split(' ')
      .join('-')
      .toLowerCase();

    const url = `${collectionURL}/${id}`;

    onSaveDocument(document, url);
  }

  render() {
    const { formName } = this.props;
    const form = forms[formName];

    return (
      <section>
        <Form formName={formName} fields={form} handleSubmit={this.onSubmit} />
      </section>
    );
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

export default withRouter(withSaveDocument(connect(mapStateToProps)(AddDocumentSection)));
