import React from 'react';

import FIELDS from './fields';

import Layout from '../../components/Layout';
import Form from '../../components/Form';
import QuoteSection from '../../components/QuoteSection';

export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  onSubmit(values) {
    console.log(values);
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

Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
