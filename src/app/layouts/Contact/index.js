import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createUID } from '../../utils';
import { business } from '../../config';
import FIELDS from './fields';

import Layout from '../../components/Layout';
import Form from '../../components/Form';
import QuoteSection from '../../components/QuoteSection';
import HeadingText from '../../components/HeadingText';
import ParagraphText from '../../components/ParagraphText';

import withSaveDocument from '../../enhancers/withSaveDocument';

export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setSubmitSuccess = this.setSubmitSuccess.bind(this);

    this.state = {};
  }

  static propTypes = {
    onSaveDocument: PropTypes.func,
    isSaving: PropTypes.bool,
  };

  componentDidUpdate(prevProps) {
    const { isSaving } = this.props;

    if (!isSaving && prevProps.isSaving) {
      // If we saved successfully
      this.setSubmitSuccess(true);
    }
  }

  onSubmit(values) {
    const { onSaveDocument } = this.props;
    const documentID = createUID();
    const url = `forms/${documentID}`;

    onSaveDocument(values, url);
  }

  setSubmitSuccess(submitSuccess) {
    this.setState({
      submitSuccess,
    });
  }

  render() {
    const { submitSuccess } = this.state;
    const formComponent = submitSuccess ? (
      // FIXME: New component
      <Fragment>
        <HeadingText>Form submitted successfully.</HeadingText>

        <div className="spacer-vt" />

        <ParagraphText>{`${business.name}  will be in touch shortly.`}</ParagraphText>
      </Fragment>
    ) : (
      <Form formName="contact" fields={FIELDS} submitText="Send" handleSubmit={this.onSubmit} />
    );

    return (
      <Layout title="Get in Touch">
        <section>{formComponent}</section>

        <QuoteSection />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { appState } = state;
  const { pendingTransactions } = appState;
  const isSaving = pendingTransactions.length ? true : false;

  return {
    isSaving,
  };
};

export default withSaveDocument(connect(mapStateToProps)(Contact));
