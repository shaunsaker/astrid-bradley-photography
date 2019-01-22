import getRef from '../getRef';

export default async ({ url }) => {
  const ref = await getRef(url);
  let data;

  try {
    const document = await ref.get();
    data = document.data();
  } catch (error) {
    console.log(error);
  }

  return data;
};
