import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import styles from './styles';

import Form from '../../../components/Form';

const LoginFormSection = ({ handleSubmit }) => {
  return (
    <section>
      <Form formName="contact" fields={FIELDS} handleSubmit={handleSubmit} />

      <style jsx>{styles}</style>
    </section>
  );
};

LoginFormSection.propTypes = {
  handleSubmit: PropTypes.func,
};
LoginFormSection.defaultProps = {};

export default LoginFormSection;
