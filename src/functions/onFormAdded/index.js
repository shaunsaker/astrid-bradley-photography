const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

const config = require('../config');

sgMail.setApiKey(config.sendGridAPIKey);

const onFormAdded = functions.firestore.document('forms/{formID}').onCreate((snapshot) => {
  const values = snapshot.data();
  const mailOptions = {
    from: `${config.admin.name} <${config.admin.email}>`,
    to: 'hello.clevelup@gmail.com' || config.business.email, // TODO: Temp
    subject: `${config.business.name} - New contact form submission`,
    text: `Name: ${values.name} \nEmail: ${values.email} \nPhone: ${values.phone} \nDate: ${
      values.date
    } \nVenue: ${values.venue} \nMessage: ${values.message}`,
  };

  return sgMail
    .send(mailOptions)
    .then(() => console.log('Email sent successfully'))
    .catch((error) => console.log(error));
});

module.exports = onFormAdded;
