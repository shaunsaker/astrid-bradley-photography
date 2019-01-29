import firebase from '../../firebase';

export default async ({ email, password }) => {
  const fb = await firebase();

  try {
    const response = await fb.auth().signInWithEmailAndPassword(email, password);

    return response;
  } catch (error) {
    throw error;
  }
};
