import getRef from '../getRef';

// Gets a collection from firestore, queries it (if query (array) provided) and
// parses the snapshot to return docs data only
export default async ({ url, query, orderBy }) => {
  let ref = await getRef(url);

  try {
    const collection = await ref.get();

    if (query) {
      ref = ref.where(...query);

      if (orderBy) {
        ref = ref.orderBy(...orderBy);
      }
    }

    const data = collection.docs.map((document) => {
      return {
        ...document.data(),
        id: document.id,
      };
    });

    if (data instanceof Error) {
      throw data;
    }

    return { data };
  } catch (error) {
    throw error;
  }
};
