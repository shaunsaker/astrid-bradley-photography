import getRef from '../getRef';

// Gets a collection from firestore, queries it (if query (array) provided) and
// parses the snapshot to return docs data only
export default async ({ url, query, orderBy }) => {
  let ref = await getRef(url);
  let data = [];

  if (query) {
    ref = ref.where(...query);

    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }
  }

  try {
    const collection = await ref.get();

    data = collection.docs.map((document) => {
      return {
        ...document.data(),
        id: document.id,
      };
    });
  } catch (error) {
    console.log(error);
  }

  return { data };
};