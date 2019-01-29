import getRef from '../getRef';

export default async ({ url, document }) => {
  const ref = await getRef(url);

  try {
    const response = ref.set(document);
    const { id } = response;

    return { id };
  } catch (error) {
    throw error;
  }
};
