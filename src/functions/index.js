const functions = require('firebase-functions');
const admin = require('firebase-admin');
const request = require('request');

const { netlifyBuildHook } = require('./config');

exports.onShootsWrite = functions.firestore.document('shoots/{shootID}').onWrite((snapshot) => {
  // Whenever a shoot is created, updated or deleted
  // Post to netlify to trigger a redeploy
  request.post(netlifyBuildHook, {}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // Success
      console.log('Post success');
    } else if (error) {
      // Error
      console.log(error);
    }
  });

  return null;
});
