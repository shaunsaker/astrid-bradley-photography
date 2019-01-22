import { firebase as firebaseConfig } from '../config';

export default async () => {
  // TODO: Only import firebase modules that we need, ie. app, auth, firestore
  const firebase = await import('firebase');

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(error.message)) {
      console.error('Firebase initialization error', error.stack);
    }
  }

  return firebase;
};
