import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';

import Layout from '../../components/Layout';
import ProgressItem from './ProgressItem';
import Form from '../../components/Form';
import ContactButton from '../../components/ContactButton';

class BuildQuote extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.setSlideIndex = this.setSlideIndex.bind(this);
    this.setFormValues = this.setFormValues.bind(this);

    this.state = {
      slideIndex: 0,
      formValues: null,
    };
  }

  onSubmitForm(values) {
    console.log(values);
  }

  setSlideIndex(slideIndex) {
    this.setState({
      slideIndex,
    });
  }

  setFormValues(formValues) {
    this.setState({
      formValues,
    });
  }

  render() {
    const { slideIndex } = this.state;

    return (
      <Layout title="Build Quote">
        <section>
          <ProgressItem number={slideIndex + 1} text="Enter Info" />

          <div className="spacer-vt" />

          <Form
            formName="build-quote"
            fields={FIELDS}
            handleSubmit={this.onSubmitForm}
            submitText="Next"
          />
        </section>

        <ContactButton />
      </Layout>
    );
  }
}

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

export default BuildQuote;
