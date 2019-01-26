import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const LoginFormSection = ({ handleSubmit }) => {
  return (
    <section>
      <h1>Login</h1>

      <form name="contact" onSubmit={handleSubmit}>
        <fieldset>
          <input type="email" name="email" id="input-email" required />

          <label htmlFor="input-email">Email Address</label>
        </fieldset>

        <fieldset>
          <input type="password" name="password" id="input-password" required />

          <label htmlFor="input-password">Password</label>
        </fieldset>

        <button type="submit" className="button shadow-sm shadow-hover">
          Submit
        </button>
      </form>

      <style jsx>{styles}</style>
    </section>
  );
};

LoginFormSection.propTypes = {
  handleSubmit: PropTypes.func,
};
LoginFormSection.defaultProps = {};

export default LoginFormSection;
