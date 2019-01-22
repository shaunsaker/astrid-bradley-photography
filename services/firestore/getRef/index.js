import firebase from '../../firebase';

// Takes a string of url format, collction/
// e.g. collection/doc/collection/doc
// and returns a firestore ref
export default async (url) => {
  const db = await firebase();
  let ref = db.firestore();

  try {
    const pathParts = url.split('/');
    let isCollection = true;

    pathParts.forEach((pathPart) => {
      ref = isCollection ? ref.collection(pathPart) : ref.doc(pathPart);
      isCollection = !isCollection;
    });
  } catch (error) {
    console.log(error);
  }

  return ref;
};
