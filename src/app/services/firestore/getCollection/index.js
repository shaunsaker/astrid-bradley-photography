import getRef from '../getRef';

// Gets a collection from firestore, queries it (if query (array) provided) and
// parses the snapshot to return docs data only
export default function getCollection({ url, query }) {
  return new Promise(async (resolve, reject) => {
    const ref = await getRef(url);
    let newRef;

    if (query) {
      newRef = ref.where(...query);
    } else {
      newRef = ref;
    }

    newRef
      .get()
      .then((collection) => {
        try {
          const collectionArray = collection.docs.map((document) => {
            return {
              ...document.data(),
              id: document.id,
            };
          });

          resolve({ collection: collectionArray });
        } catch (error) {
          if (collection.docs && true) {
            reject(new Error('References a document, not a collection'));
          } else {
            reject(error);
          }
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
