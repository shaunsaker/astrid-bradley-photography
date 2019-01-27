import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import styles from './styles';

import Form from '../../../Form';

const FormSection = () => {
  return (
    <div>
      <Form formName="add-shoot" fields={FIELDS} submitText="Add Shoot" handleSubmit={() => 'um'} />

      <style jsx>{styles}</style>
    </div>
  );
};

FormSection.propTypes = {};
FormSection.defaultProps = {};

export default FormSection;
