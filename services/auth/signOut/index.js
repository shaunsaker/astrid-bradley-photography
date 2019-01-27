import firebase from '../../firebase';

export default async () => {
  const fb = await firebase();

  try {
    const response = await fb.auth().signOut();

    if (response instanceof Error) {
      throw response;
    }

    return response;
  } catch (error) {
    throw error;
  }
};
