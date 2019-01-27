import getRef from '../getRef';

export default async ({ url, document }) => {
  const ref = await getRef(url);

  try {
    const response = ref.set(document);
    const { id } = response;

    if (response instanceof Error) {
      throw response;
    }

    return { id };
  } catch (error) {
    throw error;
  }
};
