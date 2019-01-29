import firebase from '../../firebase';

export default async () => {
  const fb = await firebase();

  try {
    const response = await fb.auth().signOut();

    return response;
  } catch (error) {
    throw error;
  }
};
