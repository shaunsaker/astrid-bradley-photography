import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import SLIDES from './slides';
import styles from './styles';

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
    const { slideIndex } = this.state;

    this.setFormValues(values);
    // TODO:
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
          <div className="row wrap">
            {SLIDES.map((slide, index) => {
              const { title } = slide;
              const number = index + 1;
              const opacity = index > slideIndex;

              // Only display one progress item ahead, if any
              if (index <= slideIndex + 1) {
                return (
                  <div key={title} className={`progress-item-container ${opacity && 'opacity'}`}>
                    <ProgressItem number={number} text={title} />
                  </div>
                );
              }

              return null;
            })}
          </div>

          <div className="spacer-vt " />

          {/* <Form
            formName="build-quote"
            fields={FIELDS}
            handleSubmit={this.onSubmitForm}
            submitText="Next"
          /> */}
        </section>

        <ContactButton />

        <style jsx>{styles}</style>
      </Layout>
    );
  }
}

BuildQuote.propTypes = {};
BuildQuote.defaultProps = {};

export default BuildQuote;
