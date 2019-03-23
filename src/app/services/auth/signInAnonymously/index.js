import firebase from '../../firebase';

export default function signInAnonymously() {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInAnonymously()
      .then((data) => {
        const response = data && {
          user: {
            uid: data.user.uid,
            isAnonymous: data.user.isAnonymous,
          },
        };
        resolve(response);
      })
      .catch((error) => reject(new Error(error)));
  });
}
