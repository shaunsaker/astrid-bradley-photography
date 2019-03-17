import React from 'react';
import PropTypes from 'prop-types';

import { createUID } from '../../utils';
import FIELDS from './fields';

import Layout from '../../components/Layout';
import Form from '../../components/Form';
import QuoteSection from '../../components/QuoteSection';

import withSaveDocument from '../../enhancers/withSaveDocument';

export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  static propTypes = {
    onSaveDocument: PropTypes.func,
  };

  onSubmit(values) {
    const { onSaveDocument } = this.props;
    const documentID = createUID();
    const url = `forms/${documentID}`;

    onSaveDocument(values, url);
  }

  render() {
    return (
      <Layout title="Get in Touch">
        <section>
          <Form formName="contact" fields={FIELDS} submitText="Send" handleSubmit={this.onSubmit} />
        </section>

        <QuoteSection />
      </Layout>
    );
  }
}

export default withSaveDocument(Contact);
