import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import styles from './styles';

import Form from '../../../Form';

const FormSection = ({ handleSubmit }) => {
  return (
    <div>
      <Form
        formName="add-shoot"
        fields={FIELDS}
        submitText="Add Shoot"
        handleSubmit={handleSubmit}
      />

      <div className="spacer-vt" />

      <style jsx>{styles}</style>
    </div>
  );
};

FormSection.propTypes = {
  handleSubmit: PropTypes.func,
};
FormSection.defaultProps = {};

export default FormSection;
