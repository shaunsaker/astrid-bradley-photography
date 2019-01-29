import getRef from '../getRef';

export default async ({ url, query }, callback) => {
  let ref = await getRef(url);

  try {
    if (query) {
      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(callback);

    return unsubscribe;
  } catch (error) {
    throw error;
  }
};
