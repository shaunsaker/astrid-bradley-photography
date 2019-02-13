import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';

import Form from '../../../components/Form';

const ContactFormSection = () => {
  return (
    <section>
      <Form formName="contact" fields={FIELDS} submitText="Send" />
    </section>
  );
};

ContactFormSection.propTypes = {};
ContactFormSection.defaultProps = {};

export default ContactFormSection;
