import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import styles from './styles';

import Form from '../../../components/Form';

const ContactFormSection = () => {
  return (
    <section>
      <h1>Get in touch</h1>

      <Form formName="contact" fields={FIELDS} submitButtonText="Send" />

      <style jsx>{styles}</style>
    </section>
  );
};

ContactFormSection.propTypes = {};
ContactFormSection.defaultProps = {};

export default ContactFormSection;
