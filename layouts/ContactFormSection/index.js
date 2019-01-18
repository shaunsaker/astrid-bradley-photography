import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ContactFormSection = () => {
  return (
    <section>
      <h1>Get in touch</h1>

      <form name="contact" method="POST" data-netlify="true">
        <fieldset>
          <input type="text" name="name" id="input-name" required />

          <label htmlFor="input-name">Name</label>
        </fieldset>

        <fieldset>
          <input type="email" name="email" id="input-email" required />

          <label htmlFor="input-email">Email Address</label>
        </fieldset>

        <fieldset>
          <input type="tel" name="phone" id="input-phone" required />

          <label htmlFor="input-phone">Contact Number</label>
        </fieldset>

        <fieldset>
          <input type="date" name="date" id="input-date" />

          <label htmlFor="input-date">Date</label>
        </fieldset>

        <fieldset>
          <input type="text" name="venue" id="input-venue" required />

          <label htmlFor="input-venue">Venue</label>
        </fieldset>

        <fieldset>
          <textarea name="message" id="input-message" required />

          <label htmlFor="input-message">Message</label>
        </fieldset>

        <button type="submit" className="button shadow-sm shadow-hover">
          Send
        </button>
      </form>

      <style jsx>{styles}</style>
    </section>
  );
};

ContactFormSection.propTypes = {};
ContactFormSection.defaultProps = {};

export default ContactFormSection;
