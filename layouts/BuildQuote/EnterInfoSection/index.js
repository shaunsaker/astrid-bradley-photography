import React from 'react';
import PropTypes from 'prop-types';

import FIELDS from './fields';
import styles from './styles';

import Form from '../../../components/Form';

const EnterInfoSection = ({ handleSubmit }) => {
  return (
    <section>
      <Form formName="enter-info" fields={FIELDS} handleSubmit={handleSubmit} />

      <style jsx>{styles}</style>
    </section>
  );
};

EnterInfoSection.propTypes = {
  handleSubmit: PropTypes.func,
};
EnterInfoSection.defaultProps = {};

export default EnterInfoSection;
