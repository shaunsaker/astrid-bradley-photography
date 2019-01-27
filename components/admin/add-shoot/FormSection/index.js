import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import styles from './styles';

import Form from '../../../Form';

const FormSection = ({ handleSubmit, children }) => {
  return (
    <div>
      <Form formName="add-shoot" fields={FIELDS} submitText="Add Shoot" handleSubmit={handleSubmit}>
        {children}
      </Form>

      <div className="spacer-vt" />

      <style jsx>{styles}</style>
    </div>
  );
};

FormSection.propTypes = {
  handleSubmit: PropTypes.func,
  children: PropTypes.node,
};
FormSection.defaultProps = {};

export default FormSection;
